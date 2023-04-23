import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'resume'
})
export class ResumePipe implements PipeTransform {
  transform(value: string, length: number): string {
    return value.substring(0, length) + '...';
  }

}
