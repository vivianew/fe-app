import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fetchPhotos } from "../actions/usersActions";
import { connect } from "react-redux";
import PhotoCard from '../components/PhotoCard';

export class PhotoContainer extends Component {
  static propTypes = {
    photos: PropTypes.array
  };

  render() {
    const { photos } = this.props;
    return (
      <div>
        <PhotoCard
          photos={photos}
        />
      </div>
    )
  }
}

function mapStateToProps({ users: { photos } }) {
  return {
    photos
  }
}

export default connect(mapStateToProps, { fetchPhotos })(PhotoContainer)