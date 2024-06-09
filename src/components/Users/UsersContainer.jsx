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
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${pageSize}`,
        {
            withCredentials: true
        })
        .then(response => {
            toggleIsFetching(false);
            setUsers(response.data.items);
            setUsersTotalCount(response.data.totalCount);
        })
        .catch(error => {
            console.error("There was an error fetching the users data!", error);
            toggleIsFetching(false);
        });
    };

    onPageChanged = (pageNumber) => {
        const { setCurrentPage, toggleIsFetching } = this.props;
        toggleIsFetching(true);
        setCurrentPage(pageNumber);
        this.getUsers(pageNumber);
    };

    handleFollow = (userId) => {
        this.props.toggleIsFetching(true);
        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {}, {
            withCredentials: true
        })
        .then(response => {
            if (response.data.resultCode === 0) {
                this.props.follow(userId);
            }
            this.props.toggleIsFetching(false);
        })
        .catch(error => {
            console.error("There was an error following the user!", error);
            this.props.toggleIsFetching(false);
        });
    };

    handleUnfollow = (userId) => {
        this.props.toggleIsFetching(true);
        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {
            withCredentials: true
        })
        .then(response => {
            if (response.data.resultCode === 0) {
                this.props.unfollow(userId);
            }
            this.props.toggleIsFetching(false);
        })
        .catch(error => {
            console.error("There was an error unfollowing the user!", error);
            this.props.toggleIsFetching(false);
        });
    };

    render() {
        const { users, pageSize, totalUsersCount, currentPage, isFetching } = this.props;
        return (
            <>
                {isFetching ? <Preloader isFetching={isFetching} /> : null}
                <Users
                    totalUsersCount={totalUsersCount}
                    pageSize={pageSize}
                    currentPage={currentPage}
                    onPageChanged={this.onPageChanged}
                    users={users}
                    follow={this.handleFollow}
                    unfollow={this.handleUnfollow}
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

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setUsersTotalCount,
    toggleIsFetching
})(UsersAPIComponent);
