import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './todo-card.css';

export default class ToDoCard extends Component {
  static propTypes = {
    toDos: PropTypes.array.isRequired
  };

  render() {
    const { toDos } = this.props;
    return(
      <div className="todo-card__box">
        {toDos.map(toDo =>
          <div key={toDo.id} className="todo-card__container">
            <div className="todo-card__title">
              <div className="todo-card__intro">Title</div>
              <div className="todo-card__title-text">{toDo.title}</div>
            </div>

            <div className="todo-card__status">
              <div className="todo-card__intro">Status</div>
              <div>{toDo.completed ? <div>Completed</div> : <div>Not Completed</div>}</div>
            </div>
          </div>
        )}
      </div>
    )
  }
}