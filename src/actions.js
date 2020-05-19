// import { CHANGE_SEARCH_FIELD } from './constant';
import * as actionTypes from './constant';

export const setSearchField = (text) => ({
  type: actionTypes.CHANGE_SEARCH_FIELD,
  payload: text
});

export const requestRobots = () => (dispatch) => {
  dispatch({ type: actionTypes.REQUEST_ROBOTS_PENDING });
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => dispatch({ type: actionTypes.REQUEST_ROBOTS_SUCCESS, payload: data }))
    .catch(error => dispatch({ type: actionTypes.REQUEST_ROBOTS_FAILED, payload: error }))
}