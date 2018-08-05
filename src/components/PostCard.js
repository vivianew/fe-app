import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './post-card.css';

export default class PostCard extends Component {
  static propTypes = {
    goToComments: PropTypes.func.isRequired,
  };

  constructor() {
    super();

    this.state = {
      showComments: false
    }
  }

  handleClick = (postId) => () => {
    this.props.goToComments(postId);

    this.setState({
      showComments: !this.state.showComments
    })
  };

  render() {
    const { posts, comments } = this.props;
    return(
      <div>
        {posts.map(post =>
          <div key={post.id} className="post-card__card">
            <div className="post-card__title">{post.title}</div>
            <div>{post.body}</div>
            <div onClick={this.handleClick(post.id)}>
              Show Comments
            </div>
            {comments && this.state.showComments &&
              comments.map(comment =>
                <div key={comment.id}>
                  <div>Commentator: {comment.name}</div>
                  <div>Email: {comment.email}</div>
                  <div>Comment: {comment.body}</div>
                </div>
              )
            }
          </div>
        )}
      </div>
    )
  }
}