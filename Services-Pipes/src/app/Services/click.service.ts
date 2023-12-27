import { Injectable } from '@angular/core';
import { PostData } from '../Interfaces/post-data';

@Injectable({
  providedIn: 'root'
})
export class ClickService {
  dataList: Array<PostData> = new Array<PostData>;

  constructor() {
   }

  onClick(data: PostData){
    this.dataList.push(data)
  }
}
