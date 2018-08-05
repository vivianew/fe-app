import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPhotos } from '../actions/usersActions';
import AlbumCard from '../components/AlbumCard';
import SelectedUserCard from '../components/SelectedUserCard';
import './album.css';

export class AlbumContainer extends Component {
  static propTypes = {
    album: PropTypes.array,
    selectedUser: PropTypes.object
  };

  render() {
    const { album, selectedUser } = this.props;
    return (
      <div>
        <SelectedUserCard
          user={selectedUser}
        />
        <div className="album__container">
          {album.map(oneAlbum =>
            <AlbumCard
              key={oneAlbum.id}
              album={oneAlbum}
              goToPhotos={album => this.props.fetchPhotos(album)}
            />
          )}
        </div>
      </div>
    )
  }
}

function mapStateToProps({ users: { album, selectedUser } }) {
  return {
    album,
    selectedUser
  }
}

export default connect(mapStateToProps, { fetchPhotos })(AlbumContainer)