import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';


export default class AlbumCard extends Component {
  static propTypes = {
    album: PropTypes.object.isRequired,
    goToPhotos: PropTypes.func.isRequired,
  };

  handleClick = (albumId) => () => {
    this.props.goToPhotos(albumId);
  };

  render() {
    const { album } = this.props;
    return(
      <Link to={`/photos`}>
        <div onClick={this.handleClick(album.id)}>
          {album.title}
        </div>
      </Link>
    )
  }
}