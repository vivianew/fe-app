import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import './card-user.css';

export default class CardUser extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    goToAlbums: PropTypes.func.isRequired,
    goToPosts: PropTypes.func.isRequired,
    goToToDos: PropTypes.func.isRequired
  };

  handleClick = (userId) => () => {
    this.props.goToAlbums(userId);
    this.props.goToPosts(userId);
    this.props.goToToDos(userId)
  };

  render() {
    const { user } = this.props;

    const subjects = [
      {
        name: 'Posts',
        link: '/posts'
      },
      {
        name: 'Albums',
        link: '/album'
      },
      {
        name: 'Todos',
        link: '/Todos'
      }
    ];

    return(
        <div onClick={this.handleClick(user.id)} className="card-user__container">
          <div className="card-user__name">{user.username}</div>
          <div>{user.name}</div>

          {subjects.map(subject =>
            <Link key={subject.link} to={subject.link}>
              <div>{subject.name}</div>
            </Link>
          )}
        </div>
    )
  }
}