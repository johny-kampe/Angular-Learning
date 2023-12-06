import { Component, OnInit } from '@angular/core';
import { ClickService } from '../Services/click.service';
import { PostData } from '../Interfaces/post-data';

@Component({
  selector: 'app-post-list-one',
  templateUrl: './post-list-one.component.html',
  styleUrls: ['./post-list-one.component.css']
})
export class PostListOneComponent implements OnInit {
  data: PostData;

  constructor(private clickService: ClickService){
    this.data = {
      date: new Date(), 
      title: "Test Title from one!", 
      description: "Test Description from one!"
    }
  }

  ngOnInit(): void {
    
  }

  addToArray(){
    this.clickService.onClick(this.data);
  }
}
