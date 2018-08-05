import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchToDos } from '../actions/usersActions';
import ToDoCard from '../components/ToDoCard';

export class ToDosContainer extends Component {
  static propTypes = {
    toDos: PropTypes.array
  };

  render() {
    const { toDos } = this.props;

    return (
      <div>
        <ToDoCard
          toDos={toDos}
        />
      </div>
    )
  }
}

function mapStateToProps({ users: { toDos } }) {
  return {
    toDos
  }
}

export default connect(mapStateToProps, { fetchToDos })(ToDosContainer)