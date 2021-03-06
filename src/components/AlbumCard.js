import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import './album-card.css';

export default class AlbumCard extends Component {
  static propTypes = {
    album: PropTypes.object.isRequired,
    goToPhotos: PropTypes.func.isRequired,
  };

  handleClick = (album) => () => {
    this.props.goToPhotos(album);
  };

  render() {
    const { album } = this.props;
    return(
      <div className="album-card__container">
        <Link to={`/photos`} className="album-card__link">
          <div onClick={this.handleClick(album)} className="album-card__title">
            {album.title}
          </div>
        </Link>
      </div>
    )
  }
}