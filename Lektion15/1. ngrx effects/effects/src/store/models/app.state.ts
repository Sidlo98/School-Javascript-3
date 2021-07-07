import { ITodoListState } from "./todolist.state";

export interface IAppState {
  readonly todoList: ITodoListState;
}
