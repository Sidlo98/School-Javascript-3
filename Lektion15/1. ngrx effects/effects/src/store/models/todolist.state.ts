import { Todo } from './todo.model';

export interface ITodoListState {
  list: Todo[];
  loading: boolean;
  error: Error | undefined;
}
