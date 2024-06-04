import React, { Component } from 'react';
import { connect } from 'react-redux';
import { followAC, unfollowAC, setUsersAC, setCurrentPageAC, setUsersTotalCountAC } from '../../redux/Users-reducer';
import axios from 'axios';
import Users from './Users';

class UsersAPIComponent extends Component {
    componentDidMount() {
        this.getUsers(this.props.currentPage);
    }

    getUsers = (pageNumber) => {
        const { pageSize, setUsers, setUsersTotalCount } = this.props;
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${pageSize}`)
            .then(response => {
                setUsers(response.data.items);
                setUsersTotalCount(response.data.totalCount);
            });
    };

    onPageChanged = (pageNumber) => {
        const { setCurrentPage } = this.props;
        setCurrentPage(pageNumber);
        this.getUsers(pageNumber);  // Fetch new users when page changes
    };

    render() {
        const { users, pageSize, totalUsersCount, currentPage, follow, unfollow } = this.props;
        return (
            <Users
                totalUsersCount={totalUsersCount}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChanged={this.onPageChanged}
                users={users}
                follow={follow}
                unfollow={unfollow}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber));
        },
        setUsersTotalCount: (totalCount) => {
            dispatch(setUsersTotalCountAC(totalCount));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);
