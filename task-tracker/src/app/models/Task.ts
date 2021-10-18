// To parse this data:
//
//   import { Convert, Task } from "./file";
//
//   const task = Convert.toTask(json);

export class Task {
  id?: number;
  text: string;
  day: number;
  reminder: boolean;

  constructor({ id, text, day, reminder }: { id?: number, text: string, day: number, reminder: boolean }) {
    this.id = id;
    this.text = text;
    this.day = day;
    this.reminder = reminder;
  }
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
