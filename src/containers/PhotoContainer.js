import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fetchPhotos } from "../actions/usersActions";
import { connect } from "react-redux";
import PhotoCard from '../components/PhotoCard';
import SelectedUserCard from '../components/SelectedUserCard';


export class PhotoContainer extends Component {
  static propTypes = {
    photos: PropTypes.array,
    selectedUser: PropTypes.object,
    selectedAlbum: PropTypes.object
  };

  render() {
    const { photos, selectedUser, selectedAlbum } = this.props;
    return (
      <div>
        <SelectedUserCard
          user={selectedUser}
          album={selectedAlbum}
        />
        <PhotoCard
          photos={photos}
        />
      </div>
    )
  }
}

function mapStateToProps({ users: { photos, selectedUser, selectedAlbum } }) {
  return {
    photos,
    selectedUser,
    selectedAlbum
  }
}

export default connect(mapStateToProps, { fetchPhotos })(PhotoContainer)