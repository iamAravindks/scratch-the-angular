import { Injectable } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Injectable()
export class FormService {

  constructor() { }

   optionalMaxLengthValidator(maxLength: number) {
    return (control: AbstractControl): { [key: string]: any } | null => {
       const value = control.value || '';
       if (value.length > maxLength) {
         return { 'maxlength': { value, maxLength } };
       }
       return null;
    };
   }
}
