import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  stringArray: Array<string> = ['Post 1', 'Post 2', 'Post 3', 'Post 4', 'Post 5', 'Post 6', ];
  objectArray: Array<any> = [
    {id: 1, postName: 'Post 1'},
    {id: 2, postName: 'Post 2'},
    {id: 3, postName: 'Post 3'},
    {id: 4, postName: 'Post 4'}    
  ]
  stringTestArray: Array<string> = []
  stepForm: string = "";
  isActive: boolean = true;

  constructor () {

  }

  addNew(){
    //this.stringArray.push("Post 6");
    this.stringTestArray.push("Post 6");
  }

  onDelete(post: string){ //or we can pass the i index (index) and then we can remove the line 26
    //let index = this.objectArray.indexOf(post);
    //this.objectArray.splice(index, 1);

    let index = this.stringTestArray.indexOf(post);
    this.stringTestArray.splice(index, 1);
  }

  onClick(str: string){
    this.stepForm = str;
  }
}
