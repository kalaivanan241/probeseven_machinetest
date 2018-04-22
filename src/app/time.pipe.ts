import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'time'
})

export class TimePipe implements PipeTransform {
transform(value: any, args?: any ) {
    if (!value) {
        return null;
    }    else {
        const dat = new Date(value);
        return dat.getHours() + ':' + dat.getMinutes();
    }
}
}
