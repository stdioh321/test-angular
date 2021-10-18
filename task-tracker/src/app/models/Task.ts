// To parse this data:
//
//   import { Convert, Task } from "./file";
//
//   const task = Convert.toTask(json);

export interface Task {
  id?:       number;
  text:     string;
  day:      number;
  reminder: boolean;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toTask(json: string): Task {
      return JSON.parse(json);
  }

  public static taskToJson(value: Task): string {
      return JSON.stringify(value);
  }
}
