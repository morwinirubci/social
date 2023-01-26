import React from "react";
import { connect } from "react-redux";
import {
  follow,
  unfollow,
  setCurrentPage,
  getUsersThunkCreator

} from "../../../redux/users-reducer";
import Users from "./Users";
import Preloader from '../../Preloader/Preloader';


class FindUsersAPI extends React.Component {
  componentDidMount() {

    this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
  }

  onPageChange = (pageNumber) => {

    this.props.getUsersThunkCreator(pageNumber, this.props.pageSize);

  };

  render() {
    return (
      <>
        {this.props.isFetching 
        ? (
          <Preloader/>) 
        : (
          <Users
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
          />
        )}
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    usersPage: state.usersPage.usersPage,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  };
};

// let mapDispatchToProps = (dispatch) => {

//     return {
//         follow: (userId) => {

//             dispatch(followAC(userId));
//         },
//         unfollow: (userId) => {

//             dispatch(unFollowAC(userId));
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users));
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber));
//         },
//         setTotalUsersCounts: (totalCount) => {
//             dispatch(setTotalUsersCountAC(totalCount));
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching));
//         },
//     }
// }

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setCurrentPage,
  getUsersThunkCreator,
})(FindUsersAPI);
