import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormService } from './form.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
  providers:[FormService]
})
export class FormComponent {

  constructor(private readonly formHelper:FormService){

  }

  private submitted:boolean = false;
profileForm = new FormGroup({
  firstName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
  lastName: new FormControl('', [Validators.required,Validators.minLength(3), Validators.maxLength(20)]),
  middleName: new FormControl('',this.formHelper.optionalMaxLengthValidator(20)),
  age: new FormControl('', [Validators.required, Validators.min(10), Validators.max(50)]),
  gender: new FormControl('male', Validators.required),
  address: new FormGroup({
    street: new FormControl('', Validators.required),
    landmark: new FormControl('',this.formHelper.optionalMaxLengthValidator(20)),
    city: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
    zipCode: new FormControl('', [Validators.required, Validators.pattern(/^\d+$/), Validators.maxLength(20)]),
    country: new FormControl('', Validators.required)
  }),
  hobbies: new FormArray([new FormControl('')])
});

// getter for getting all the hobbies since it is dynamically renderd
get hobbies(): FormArray {
  return this.profileForm.get('hobbies') as FormArray;
}

// this.hobbies is the getter and we push a new FormControl to it
addHobby(){
  const newHobby = new FormControl(''); 
  this.hobbies.insert(0, newHobby);
 }

 deleteHobby(index: number): void {
  this.hobbies.removeAt(index);
}
 
onSubmit(){
  this.setFormSubmitted(true);
  if(
  this.profileForm.valid
  ){
    console.log(this.profileForm.value);

  }
}



setFormSubmitted(val:boolean){
  this.submitted = val;
}
IsFormSubmitted(){
  return this.submitted
}
}
