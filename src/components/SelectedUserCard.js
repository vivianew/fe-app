import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './selected-user-card.css';

export default class SelectedUserCard extends Component {
  static propTypes = {
    user: PropTypes.object
  };

  render() {
    const { user, album } = this.props;

    return(
    <div className="selected-user__container">
      <div className="selected-user__name">
        <div className="selected-user__intro">By</div>
        <div>{user.username}</div>
      </div>

      <div className="selected-user__company-container">
        <div className="selected-user__intro">From</div>
        {user.company && <div className="selected-user__company">{user.company.name}</div>}
      </div>

      {album &&
        <div className="selected-user__album">
          <div className="selected-user__intro">Album</div>
          <div className="selected-user__album-title">{album.title}</div>
        </div>
      }
    </div>
    )
  }
}