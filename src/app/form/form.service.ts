import { Injectable } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Injectable()
export class FormService {

  constructor() { }

  ERROR_MESSAGES = {
    required:(field:string)=>`${field} is required`,
    minlength:(field:string,minlength:number)=>`${field} must be at least  ${minlength} characters`,
    maxlength:(field:string,maxlength:number)=>`${field} must be at max  ${maxlength} characters`,
    min:(field:string,minval:number)=>`${field} should have min value of ${minval}`,
    max:(field:string,maxval:number)=>`${field} should have max value of ${maxval}`,
  }

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
