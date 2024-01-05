import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private afs: AngularFirestore, private toastr: ToastrService) { }

  saveData(data: any){
    this.afs.collection('categories').add(data).then(docRef => {
      console.log(docRef);
      this.toastr.success('Data Insert Successfully ..!')     
    }).catch(err => {
      console.log(err);
    })
  }

  loadData(){
    return this.afs.collection('categories').snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Array<object>;
          const id = a.payload.doc.id;

          return {id, data};
        })
      })
    )
  }

  updateData(id: string, editData: string){
    this.afs.collection('categories').doc(id).update(editData).then(docRef => {
      this.toastr.success('Data Updated Successfully ..!')
    })
  }

  deleteData(id: string){
    this.afs.collection('categories').doc(id).delete().then(docRef => {
      this.toastr.success('Data Deleted Successfully ..!')
    })
  }
}
