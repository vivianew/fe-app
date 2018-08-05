import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SelectedUserCard extends Component {
  static propTypes = {
    user: PropTypes.object
  };

  render() {
    const { user } = this.props;

    return(
    <div>
        <div>{user.username}</div>
        {user.company && <div>{user.company.name}</div>}
      </div>
    )
  }
}