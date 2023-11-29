import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'append'})

export class AppendPipe implements PipeTransform {
    transform(value: any, args?: any) {
        return "City Name: " + value;
    }
}