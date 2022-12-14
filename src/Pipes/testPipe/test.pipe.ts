import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'test'
})
export class TestPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {

    return value + args[0] + args[1];
  }

}
