import { Component } from '@angular/core';
import { NgForm, FormControl, FormGroup, Validators, FormArray, FormBuilder, Form } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Reactive-Forms';

  form: any;
  emailRegex: string = '[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$'
  contactRegex: string = '[789][0-9]{9}'

  constructor(fb: FormBuilder){
    this.form = fb.group({
      fullName: ['', [
        Validators.required,
        Validators.minLength(5)
      ]],
      email: ['', [
        Validators.required,
        Validators.pattern(this.emailRegex)
      ]],

      contactDetails: fb.group({
        address: ['', Validators.required],
        shippingAddress: ['', Validators.required],
        contactNo: new FormControl('', [
          Validators.required,
          Validators.pattern(this.contactRegex)
        ])
      })
    });

    skills: new FormArray([])
  }

  get getFullName(){
    return this.form.get('fullName');
  }

  get getEmail(){
    return this.form.get('email');
  }

  get getAddress(){
    return this.form.get('contactDetails.address');
  }

  get getShippingAddress(){
    return this.form.get('contactDetails.shippingAddress');
  }

  get getContactNo(){
    return this.form.get('contactDetails.contactNo');
  }

  get getSkills(){
    return this.form.get('skills') as FormArray;
  }

  addSkills(skill: String){
    console.log(skill);
    
    this.getSkills.push(skill)

    console.log(this.form.value);
  }

  onSubmit(){
    console.log(this.form.value);
    
      // console.log(
      //   f.value['fullName'],
      //   f.value['email'],
      //   f.value['address']
      // );

    }

  getValue(f:any){
    console.log(f);
  }
}
