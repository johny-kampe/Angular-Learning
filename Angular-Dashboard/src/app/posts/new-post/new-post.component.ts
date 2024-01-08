import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post';
import { CategoriesService } from 'src/app/services/categories.service';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  permalink: string = ''
  imgSrc: any = './assets/placeholder-default.jpg'
  selectedImg: any

  categories: Array<object> = []
  postForm: FormGroup;

  constructor(
    private categoryService: CategoriesService, 
    private fb: FormBuilder, 
    private postService: PostsService,
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe(val => {
      console.log(val);
      this.postService.loadOneData(val['id'])
    })

      
    this.postForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(10)]],
      permalink: [{value: '', disabled: true}, Validators.required],
      excerpt: ['', [Validators.required, Validators.minLength(50)]],
      // categoryName: ['', Validators.required],
      postImg: ['', Validators.required],
      content: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    this.categoryService.loadData().subscribe(val => {
      this.categories = val.map(item => {
        let itemData = item.data
        let categoryData: string [] = []

        for (let key in itemData) //With the iteration we can get the internal objects of the array
        {
          let data: string = JSON.stringify(itemData[key])
          categoryData.push(data.replace(/"/g, ''));
        }
        return categoryData
      })
    })
  }

  get fc(){
    return this.postForm.controls
  }

  onTitleChanged($event: any){
    const title = $event.target.value
    this.permalink = title.replace(/\s/g, '-')
  }

  showPreview($event: any){
    const reader = new FileReader()
    reader.onload = (e) => {
      this.imgSrc = e.target?.result
    }

    reader.readAsDataURL($event.target.files[0])
    this.selectedImg = $event.target.files[0]
  }

  onSubmit(){
    console.log(this.postForm.value);

    // let splitted = this.postForm.value.category.split('-')
    // console.log(splitted);
    
    const postData: Post = {
      title: this.postForm.value.title,
      permalink: this.postForm.value.permalink,
      category: {
        categoryId: '',
        category: ''
      },
      postImgPath: '',
      excerpt: this.postForm.value.excerpt,
      content: this.postForm.value.content,
      isFeatured: false,
      views: 0,
      status: 'new',
      createdAt: new Date()
    }

    console.log(postData);
    

    this.postService.uploadImage(this.selectedImg, postData)
    this.postForm.reset()
    this.imgSrc = './assets/placeholder-default.jpg'
  }
}
