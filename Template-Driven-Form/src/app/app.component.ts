import { Component } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Template-Driven-Form';

  constructor(){}

  onSubmit(f: NgForm){
    console.log(f.value);
    
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
