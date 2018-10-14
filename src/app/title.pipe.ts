import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'title'
})
export class TitlePipe implements PipeTransform {

  transform(value: any, ...args): any { 
    return value.replace(/[^a-zA-Z ]/g, "");
  }

}
