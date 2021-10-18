import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'eraseme'
})
export class ErasemePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if (value && typeof value == "string") value = value.toUpperCase()
    return value;
  }

}
