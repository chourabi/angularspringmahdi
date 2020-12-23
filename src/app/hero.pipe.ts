import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hero'
})
export class HeroPipe implements PipeTransform {

  transform(value: String, ...args: unknown[]): unknown {
    console.log(value);
    console.log(args);

    var r ='';

    for (let i = 0; i < (value.length * 2); i++) {
      r+='*';
      
    }
    

    
    return (r+args[0] );
  }

}
