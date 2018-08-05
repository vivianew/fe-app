import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPosts, fetchPostComments } from '../actions/usersActions';
import PostCard from '../components/PostCard';

export class PostsContainer extends Component {
  static propTypes = {
    posts: PropTypes.array
  };

  render() {
    const { posts, comments } = this.props;

    return (
      <div>
        <PostCard
          posts={posts}
          goToComments={postId => this.props.fetchPostComments(postId)}
          comments={comments}
        />
      </div>
    )
  }
}

function mapStateToProps({ users: { posts, comments } }) {
  return {
    posts,
    comments
  }
}

export default connect(mapStateToProps, { fetchPosts, fetchPostComments })(PostsContainer)