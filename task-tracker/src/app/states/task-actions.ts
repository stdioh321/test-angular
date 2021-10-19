import { Task } from './../models/Task';
// import { Task } from 'src/app/models/Task';
import { createAction, props } from "@ngrx/store";





export const add = createAction("Add Task", props<Task>());
export const update = createAction("Update Task", props<Task>());
export const addAll = createAction("Add All Tasks", props<{ tasks: Task[] }>());
export const remove = createAction("Remove Task", props<{ taskId: number }>());
export const clear = createAction("Clear Tasks");
