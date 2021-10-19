import { Task } from 'src/app/models/Task';
import { createReducer, on } from "@ngrx/store";
import { add, addAll, clear, remove, update } from './task-actions';



export const initialState: Task[] = [];

const _taskReducer = createReducer(
  initialState,
  on(addAll, (entries, { tasks }) => [...tasks]),
  on(add, (entries, task) => [...entries, task]),
  on(update, (entries, task) => entries.map(it => {
    if (it.id == task.id) return task;
    return it;
  })),
  on(remove, (entries, { taskId }) => entries.filter(it => it.id != taskId)),
  on(clear, (_) => []),

);
export function taskReducer(state: any, action: any) {
  return _taskReducer(state, action);
}
