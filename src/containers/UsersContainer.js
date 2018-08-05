import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchUsers, fetchUserAlbum, fetchPosts, fetchToDos } from '../actions/usersActions';
import CardUser from '../components/CardUser';
import './users-container.css';

export class UsersContainer extends Component {
  static propTypes = {
    users: PropTypes.array
  };

  componentWillMount() {
    this.props.fetchUsers();
  }

  render() {
    const { users } = this.props;

    return (
      <div className="user-container__container">
        {users.map(user => (
          <CardUser
            key={user.id}
            user={user}
            goToAlbums={userId => this.props.fetchUserAlbum(userId)}
            goToPosts={userId => this.props.fetchPosts(userId)}
            goToToDos={userId => this.props.fetchToDos(userId)}
          />
        ))}
      </div>
    )
  }
}

function mapStateToProps({ users: { users } }) {
  return  {
    users
  }
}

export default connect(mapStateToProps, { fetchUsers, fetchUserAlbum, fetchPosts, fetchToDos })(UsersContainer)