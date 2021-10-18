import { Task } from 'src/app/models/Task';
export class TaskStore {
  private static instance: TaskStore;
  public static getInstance(): TaskStore {
    if (!TaskStore.instance) {
      TaskStore.instance = new TaskStore();
    }

    return TaskStore.instance;
  }

  public tasks: Task[] = [];


}
