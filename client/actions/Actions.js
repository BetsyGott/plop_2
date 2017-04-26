export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const TOGGLE_CASE = 'TOGGLE_CASE';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
};

export function addToDo(text) {
  return {type: ADD_TODO, text}
}

export function deleteToDo(index) {
  return {type: DELETE_TODO, index}
}

export function toggleToDoCase(index) {
    return {type: TOGGLE_CASE, index}
}

export function setVisibilityFilter(filter) {
  return {type: SET_VISIBILITY_FILTER, filter}
}