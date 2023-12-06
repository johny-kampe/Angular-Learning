import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.css']
})
export class FormPageComponent implements OnInit{
  myForm: FormGroup;
  userArray: Array<any> = [];

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required]
    });
  }
  
  constructor(private formBuilder: FormBuilder){
  } 
  
  onSubmit() {
    if (this.myForm.valid) {
      this.userArray.push({
        "name": this.myForm.value.name,
        "email": this.myForm.value.email,
        "address": this.myForm.value.address
      })
    } else {
      console.log('Form is invalid');
    }
  }

  onDelete(index){
    this.userArray.splice(index,1)
  }
}
