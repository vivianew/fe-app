import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './photo-card.css';

export default class CardUser extends Component {
  static propTypes = {
    photos: PropTypes.array
  };

  render() {
    const { photos } = this.props;
    return(
      <div className="photo-card__container">
        {photos.map(photo =>
          <div key={photo.id} className="photo-card__box">
            <div className="photo-card__title">{photo.title}</div>
            <div className="photo-card__thumbnail">
              <img src={photo.thumbnailUrl} alt="thumbnail" />
            </div>
          </div>)}
      </div>
    )
  }
}