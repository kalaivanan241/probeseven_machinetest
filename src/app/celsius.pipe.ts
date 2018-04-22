import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'celsius'
})

export class CelsiusPipe implements PipeTransform {
transform(value: any, args?: any ) {
    if (!value) {
        return null;
    }    else {
        return Math.floor((value - 32) * 5 / 9);
    }
}
}
