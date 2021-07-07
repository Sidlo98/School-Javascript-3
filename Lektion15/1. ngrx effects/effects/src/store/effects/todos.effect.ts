import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { TodosService } from 'src/app/services/todos.service';
import { ActionTypes } from '../action.types';

@Injectable()
export class TodosEffect {
  constructor(private action$: Actions, private todoService: TodosService) {}

  loadTodos$ = createEffect(() =>
    this.action$.pipe(
      ofType(ActionTypes.TODOLIST_LOAD),
      mergeMap(() =>
        this.todoService.getTodos().pipe(
          map((todos) => ({
            type: ActionTypes.TODOLIST_LOAD_SUCCESS,
            payload: todos,
          })),
          catchError((error) =>
            of({ type: ActionTypes.TODOLIST_LOAD_FAILURE, payload: error })
          )
        )
      )
    )
  );

  addTodo$ = createEffect(() =>
    this.action$.pipe(
      ofType(ActionTypes.ADD_TODO),
      mergeMap((action: any) =>
        this.todoService.addTodo(action.payload).pipe(
          map((todo) => ({
            type: ActionTypes.ADD_TODO_SUCCESS,
            payload: todo,
          })),
          catchError((error) =>
            of({ type: ActionTypes.ADD_TODO_FAILURE, payload: error })
          )
        )
      )
    )
  );

  deleteTodo$ = createEffect(() =>
    this.action$.pipe(
      ofType(ActionTypes.REMOVE_TODO),
      mergeMap((action: any) =>
        this.todoService.deleteTodo(action.payload).pipe(
          map(() => ({
            type: ActionTypes.REMOVE_TODO_SUCCESS,
            payload: action.payload,
          })),
          catchError((error) =>
            of({ type: ActionTypes.REMOVE_TODO_FAILURE, payload: error })
          )
        )
      )
    )
  );
}
