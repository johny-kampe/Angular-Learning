import { Pipe, PipeTransform } from '@angular/core';
import { PostData } from '../Interfaces/post-data';

@Pipe({
  name: 'printArray'
})
export class PrintArrayPipe implements PipeTransform {

  transform(value: PostData, ...args: unknown[]): string {
    return "The title is: " + value.title + ", The description is: " + value.description + ", Date: " + value.date;
  }

}
