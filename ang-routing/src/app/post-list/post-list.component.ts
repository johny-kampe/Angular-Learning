import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts = [
    {
      id: 1,
      title: "Title 1",
      content: "Lorem Ipsum is simply dummy text of the printing and type setting industry."
    },
    {
      id: 2,
      title: "Title 2",
      content: "Lorem Ipsum is simply dummy text of the printing and type setting industry."
    },
    {
      id: 3,
      title: "Title 3",
      content: "Lorem Ipsum is simply dummy text of the printing and type setting industry."
    },
    {
      id: 4,
      title: "Title 4",
      content: "Lorem Ipsum is simply dummy text of the printing and type setting industry."
    },
    {
      id: 5,
      title: "Title 5",
      content: "Lorem Ipsum is simply dummy text of the printing and type setting industry."
    },
    {
      id: 6,
      title: "Title 6",
      content: "Lorem Ipsum is simply dummy text of the printing and type setting industry."
    }
  ]

  constructor(private route: ActivatedRoute) {}
  
  ngOnInit(): void {
    this.route.queryParamMap.subscribe(value => {
      console.log(value);
      let page = value.get('page');
      const order = value.get('orderBy')
      console.log(page, order);
    })
  }
}
