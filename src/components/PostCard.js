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
            <div className="post-card__body">{post.body}</div>
            <div onClick={this.handleClick(post.id)} className="post-card__comment-text">
              {this.state.showComments ? <div>Hide Comments</div> : <div>Show Comments</div>}
            </div>
            {comments && this.state.showComments &&
              comments.map(comment =>
                <div key={comment.id} className="post-card__comment-container">
                  <div className="post-card__comment-body">" {comment.body} "</div>

                  <div className="post-card__comment-info">
                    <div className="post-card__comment-intro">By</div>
                    <div>{comment.name}</div>
                  </div>

                  <div className="post-card__comment-info">
                    <div className="post-card__comment-intro">Contact</div>
                    <div className="post-card__comment-email">{comment.email}</div>
                  </div>
                </div>
              )
            }
          </div>
        )}
      </div>
    )
  }
}