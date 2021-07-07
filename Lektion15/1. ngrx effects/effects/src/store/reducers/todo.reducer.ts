import { Action, createReducer, on } from '@ngrx/store';
import { ITodoListState } from '../models/todolist.state';
import * as todoActions from '../actions/todoList.actions';
import { state } from '@angular/animations';

export const initState: ITodoListState = {
  list: [],
  loading: false,
  error: undefined,
};

const _todoListReducer = createReducer(
  initState,

  on(todoActions.loadTodos, (state) => {
    return {
      ...state,
      loading: true,
    };
  }),

  on(todoActions.loadTodosSuccess, (state, { payload }) => {
    return {
      ...state,
      list: payload,
      loading: false,
      error: undefined,
    };
  }),

  on(todoActions.loadTodosFailure, (state, { payload }) => {
    return {
      ...state,
      error: payload,
      loading: false,
    };
  }),

  on(todoActions.addTodo, (state) => {
    return {
      ...state,
      loading: true,
    };
  }),

  on(todoActions.addTodoSuccess, (state, { payload }) => {
    return {
      ...state,
      list: [...state.list, payload],
      loading: false,
      error: undefined,
    };
  }),

  on(todoActions.addTodoFailure, (state, { payload }) => {
    return {
      ...state,
      error: payload,
      loading: false,
    };
  }),

  on(todoActions.deleteTodo, (state) => {
    return {
      ...state,
      loading: true,
    };
  }),

  on(todoActions.deleteTodoSuccess, (state, { payload }) => {
    return {
      ...state,
      list: state.list.filter((item) => item.id !== payload),
      loading: false,
      error: undefined,
    };
  }),

  on(todoActions.deleteTodoFailure, (state, { payload }) => {
    return {
      ...state,
      error: payload,
      loading: false,
    };
  })
);

export function todoListReducer(
  state: ITodoListState | undefined,
  action: Action
) {
  return _todoListReducer(state, action);
}
