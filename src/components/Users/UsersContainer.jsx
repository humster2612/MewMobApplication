import React, { Component } from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, getUsers, setCurrentPage, togleFollowingProgress } from '../../redux/Users-reducer';
import Users from './Users';
import Preloader from '../Coomon/Preloader/Preloader';
import { withAuthRedirect } from '../../Hoc/withAuthRedirect';

class UsersAPIComponent extends Component {
    componentDidMount() {
        const { currentPage, pageSize } = this.props;
        this.props.getUsers(currentPage, pageSize);
    }

    onPageChanged = (pageNumber) => {
        const { pageSize } = this.props;
        this.props.setCurrentPage(pageNumber); // Обновляем текущую страницу
        this.props.getUsers(pageNumber, pageSize);
    };

    render() {
        const { users, pageSize, totalUsersCount, currentPage, isFetching, followingInProgress, follow, unfollow } = this.props;
        return (
            <>
                {isFetching && <Preloader isFetching={isFetching} />}
                <Users
                    totalUsersCount={totalUsersCount}
                    pageSize={pageSize}
                    currentPage={currentPage}
                    onPageChanged={this.onPageChanged}
                    users={users}
                    follow={follow}
                    unfollow={unfollow}
                    followingInProgress={followingInProgress}
                />
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    };
};


export default  withAuthRedirect(connect(mapStateToProps, {
    follow,
    unfollow,
    getUsers,
    setCurrentPage,
    togleFollowingProgress
})(UsersAPIComponent));
//доделать  с юсерами что бы на логине из не было видно 
