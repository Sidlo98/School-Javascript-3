import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "../action.types";
import { Todo } from "../models/todo.model";

export const loadTodos = createAction(ActionTypes.TODOLIST_LOAD);
export const loadTodosSuccess = createAction(ActionTypes.TODOLIST_LOAD_SUCCESS, props<{payload: Todo[]}>());
export const loadTodosFailure = createAction(ActionTypes.TODOLIST_LOAD_FAILURE, props<{payload: Error}>());

export const addTodo = createAction(ActionTypes.ADD_TODO, props<{payload: Todo}>());
export const addTodoSuccess = createAction(ActionTypes.ADD_TODO_SUCCESS, props<{payload: Todo}>());
export const addTodoFailure = createAction(ActionTypes.ADD_TODO_FAILURE, props<{payload: Error}>());

export const deleteTodo = createAction(ActionTypes.REMOVE_TODO, props<{payload: string}>());
export const deleteTodoSuccess = createAction(ActionTypes.REMOVE_TODO_SUCCESS, props<{payload: string}>());
export const deleteTodoFailure = createAction(ActionTypes.REMOVE_TODO_FAILURE, props<{payload: Error}>());