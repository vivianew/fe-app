import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPhotos } from '../actions/usersActions';
import AlbumCard from '../components/AlbumCard';

export class AlbumContainer extends Component {
  static propTypes = {
    album: PropTypes.array
  };

  render() {
    const { album } = this.props;
    return (
      <div>
        <div>
          {album.map(oneAlbum =>
            <AlbumCard
              key={oneAlbum.id}
              album={oneAlbum}
              goToPhotos={albumId => this.props.fetchPhotos(albumId)}
            />
          )}
        </div>
      </div>
    )
  }
}

function mapStateToProps({ users: { album } }) {
  return {
    album
  }
}

export default connect(mapStateToProps, { fetchPhotos })(AlbumContainer)