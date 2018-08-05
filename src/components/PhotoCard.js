import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CardUser extends Component {
  static propTypes = {
    photos: PropTypes.array
  };

  render() {
    const { photos } = this.props;
    return(
      <div>
        {photos.map(photo =>
          <div key={photo.id}>
            <div>{photo.title}</div>
            <div>{photo.thumbnailUrl}</div>
          </div>)}
      </div>
    )
  }
}