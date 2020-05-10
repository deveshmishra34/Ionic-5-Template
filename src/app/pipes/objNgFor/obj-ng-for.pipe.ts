import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ObjNgFor'
})
export class ObjNgForPipe implements PipeTransform {

    transform(value: any, args: any[] = null): any {
        return Object.keys(value);
    }

}
