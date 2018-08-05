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

  handleClick = (userId, username) => () => {
    this.props.goToAlbums(userId);
    this.props.goToPosts(userId, username);
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
        <div onClick={this.handleClick(user)} className="card-user__container">
          <div className="card-user__identity">
            <div className="card-user__username">{user.username}</div>
          </div>

          <div className="card-user__company-info">
            <div className="card-user__company-name">{user.company.name}</div>
            <div className="card-user__company-quote">{user.company.catchPhrase}</div>
          </div>

          <div className="card-user__links">
            {subjects.map(subject =>
              <Link className="card-user__link" key={subject.link} to={subject.link}>
                <div>{subject.name}</div>
              </Link>
            )}
          </div>

        </div>
    )
  }
}