import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.css']
})
export class FormPageComponent implements OnInit{
  myForm: FormGroup;

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }
  
  constructor(private formBuilder: FormBuilder){
  } 
  
  onSubmit() {
    if (this.myForm.valid) {
      console.log(this.myForm.value);
      this.myForm.reset();
    } else {
      console.log('Form is invalid');
    }
  }
}
