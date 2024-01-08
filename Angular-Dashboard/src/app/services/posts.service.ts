import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(
    private storage: AngularFireStorage,
    private afs: AngularFirestore,
    private toastr: ToastrService,
    private router: Router) { }

  uploadImage(selectedImage, postData){
    const filePath = `postIMG/${Date.now()}`
    console.log(filePath);

    this.storage.upload(filePath, selectedImage).then(() => {
      console.log('Post image uploaded successfully');

      this.storage.ref(filePath).getDownloadURL().subscribe(url => {
        postData.postImgPath = url
        console.log(postData);

        this.saveData(postData)
      })
    })
  }

  saveData(postData){
    this.afs.collection('posts').add(postData).then(docRef => {
      this.toastr.success('Data Insert Successfully ..!')
      this.router.navigate(['/posts'])
    })
  }

  loadData(){
    return this.afs.collection('posts').snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Array<object>;
          const id = a.payload.doc.id;

          return {id, data};
        })
      })
    )
  }

  loadOneData(id){
    return this.afs.doc(`posts/${id}`).valueChanges()
  }
}
