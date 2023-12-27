import { Component, OnInit } from '@angular/core';
import { ClickService } from '../Services/click.service';
import { PostData } from '../Interfaces/post-data';

@Component({
  selector: 'app-post-list-two',
  templateUrl: './post-list-two.component.html',
  styleUrls: ['./post-list-two.component.css']
})
export class PostListTwoComponent implements OnInit {
  data: PostData;
  arrayOfData: Array<PostData> = new Array<PostData>;

  constructor(private clickService: ClickService){
    this.data = {
      date: new Date(), 
      title: "Test Title from two!", 
      description: "Test Description from two!"
    }
    this.arrayOfData = clickService.dataList
  }

  ngOnInit(): void {
    
  }
  
  addToArray(){
    this.clickService.onClick(this.data);
  }
}
