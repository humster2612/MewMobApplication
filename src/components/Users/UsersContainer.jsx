import React, { Component } from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, setUsers, setCurrentPage, setUsersTotalCount, toggleIsFetching } from '../../redux/Users-reducer';
import axios from 'axios';
import Users from './Users';
import Preloader from '../Coomon/Preloader/Preloader';

class UsersAPIComponent extends Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        this.getUsers(this.props.currentPage);
    }

    getUsers = (pageNumber) => {
        const { pageSize, setUsers, setUsersTotalCount, toggleIsFetching } = this.props;
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${pageSize}`)
            .then(response => {
                toggleIsFetching(false);
                setUsers(response.data.items);
                setUsersTotalCount(response.data.totalCount);
            });
    };

    onPageChanged = (pageNumber) => {
        const { setCurrentPage, toggleIsFetching } = this.props;
        toggleIsFetching(true);
        setCurrentPage(pageNumber);
        this.getUsers(pageNumber);
    };

    render() {
        const { users, pageSize, totalUsersCount, currentPage, follow, unfollow, isFetching } = this.props;
        return (
            <>
                {isFetching ? <Preloader isFetching={isFetching} /> : null}
                <Users
                    totalUsersCount={totalUsersCount}
                    pageSize={pageSize}
                    currentPage={currentPage}
                    onPageChanged={this.onPageChanged}
                    users={users}
                    follow={follow}
                    unfollow={unfollow}
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
    };
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId));
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId));
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users));
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber));
//         },
//         setUsersTotalCount: (totalCount) => {
//             dispatch(setUsersTotalCountAC(totalCount));
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching));
//         }
//     };

// };



export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setUsersTotalCount,
    toggleIsFetching
})(UsersAPIComponent);

// export default connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);
