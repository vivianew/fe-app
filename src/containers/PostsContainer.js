import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPosts, fetchPostComments } from '../actions/usersActions';
import PostCard from '../components/PostCard';
import SelectedUserCard from '../components/SelectedUserCard';
import './post-container.css';

export class PostsContainer extends Component {
  static propTypes = {
    posts: PropTypes.array,
    comments: PropTypes.array,
    selectedUser: PropTypes.object,
  };

  render() {
    const { posts, comments, selectedUser } = this.props;

    return (
      <div className="posts-container__container">
        <SelectedUserCard
          user={selectedUser}
        />
        <PostCard
          posts={posts}
          goToComments={postId => this.props.fetchPostComments(postId)}
          comments={comments}
        />
      </div>
    )
  }
}

function mapStateToProps({ users: { posts, comments, selectedUser } }) {
  return {
    posts,
    comments,
    selectedUser
  }
}

export default connect(mapStateToProps, { fetchPosts, fetchPostComments })(PostsContainer)