/*
 *
 * Todo thunks
 *
 */

// Do this in every file where you use `fetch`
import fetch from 'cross-fetch';
import validator from 'validator';
import { toastr } from 'react-redux-toastr';
import { push, goBack } from 'connected-react-router';

import {
  fetchTodosRequest,
  fetchTodosSuccess,
  fetchTodosFailure,
} from './actions';

// Check Todos
export function checkTodos() {
  return function(dispatch, getState) {
    if (getState().todo.todos.length === 0) {
      dispatch(fetchTodosRequest(true));
    }
  };
}

export function fetchTodos() {
  return function(dispatch, getState) {
    dispatch(checkTodos());

    return fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'GET',
    })
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        return response.json();
      })
      .then(data => {
        toastr.success('Success', 'Todos Fetched Successfully');

        dispatch(fetchTodosSuccess(data.slice(170)));
        dispatch(fetchTodosRequest(false));
      })
      .catch(error => {
        const errorData = {};
        errorData.isError = true;
        errorData.errorMessage = 'Failed to fetch Todos';

        toastr.error('Error', 'Error Fetching Todos');

        dispatch(fetchTodosFailure(errorData));
      });
  };
}
