import React from 'react';
import {connect} from "react-redux";
import {followAC, setUsersAC, unFollowAC, setCurrentPageAC, setTotalUsersCountAC, toggleIsFetchingAC} from "../../../redux/users-reducer";
import axios from 'axios';
import Users from './Users';
import preloader from '../../../assets/images/preloader.svg';


class FindUsersAPI extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCounts(response.data.totalCount);
        })
    }

    onPageChange = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
        })
    }

    render() {
        return <>
            {this.props.isFetching ? <img src={preloader}/> : <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                usersPage={this.props.usersPage}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                setUsers={this.props.setUsers}
                setCurrentPage={this.props.setCurrentPage}
                setTotalUsersCounts={this.props.setTotalUsersCounts}
                onPageChange={this.onPageChange}
        />}

        </>
    }
}

let mapStateToProps = (state) => {
    return {
        usersPage: state.usersPage.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

let mapDispatchToProps = (dispatch) => {

    return {
        follow: (userId) => {

            dispatch(followAC(userId));
        },
        unfollow: (userId) => {

            dispatch(unFollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber));
        },
        setTotalUsersCounts: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount));
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching));
        },
    }
}

const FindUsersContainer = connect(mapStateToProps, mapDispatchToProps)(FindUsersAPI)

export default FindUsersContainer;