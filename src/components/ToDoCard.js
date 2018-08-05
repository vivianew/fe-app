import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ToDoCard extends Component {
  static propTypes = {
    toDos: PropTypes.array.isRequired
  };

  render() {
    const { toDos } = this.props;
    return(
      <div>
        {toDos.map(toDo =>
          <div key={toDo.id}>
            <div>{toDo.title}</div>
            <div>{toDo.completed ? <div>Completed</div> : <div>Not Completed</div>}</div>
          </div>
        )}
      </div>
    )
  }
}