import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchToDos } from '../actions/usersActions';
import ToDoCard from '../components/ToDoCard';
import SelectedUserCard from '../components/SelectedUserCard';

export class ToDosContainer extends Component {
  static propTypes = {
    toDos: PropTypes.array,
    selectedUser: PropTypes.object,
  };

  render() {
    const { toDos, selectedUser } = this.props;
    return (
      <div>
        <SelectedUserCard
          user={selectedUser}
        />
        <ToDoCard
          toDos={toDos}
        />
      </div>
    )
  }
}

function mapStateToProps({ users: { toDos, selectedUser } }) {
  return {
    toDos,
    selectedUser
  }
}

export default connect(mapStateToProps, { fetchToDos })(ToDosContainer)