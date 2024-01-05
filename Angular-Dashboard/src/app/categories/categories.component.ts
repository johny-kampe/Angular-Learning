import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../services/categories.service';
import { Category } from '../models/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})

export class CategoriesComponent implements OnInit {

  categoryArray: Array<object> = []
  formCategory: string = ''
  formStatus: string = 'Add'
  categoryId: string = ''

  constructor( private categoryService: CategoriesService) { }

  ngOnInit(): void {
    this.categoryService.loadData().subscribe(val => {
      this.categoryArray = val.map(item => {
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

  onSubmit(formData: any){
    let categoryData: Category = {
      category: formData.value.category
    }

    if(this.formStatus == 'Add'){
      this.categoryService.saveData(categoryData)
      formData.reset()
    } else if(this.formStatus == 'Edit'){
      this.categoryService.updateData(this.categoryId, categoryData.category)
      formData.reset()
      this.formStatus = 'Add'
    }

    // this.afs.collection('categories').add(categoryData).then(docRef => {
    //   console.log(docRef);

    //   this.afs.doc(`categories/${docRef.id}`).collection('subcategories').add(subCategoryData).then(docRef1 => {
    //     console.log(docRef1);

    //     this.afs.doc(`categories/${docRef.id}/subcategories/${docRef1.id}`).collection('subsubcategories').add(subCategoryData).then(docRef2 => {
    //       console.log(docRef2);
          
    //     })
    //   })
        //   console.log(docRef1);
      // this.afs.collection('categories').doc(docRef.id).collection('subcategories').add(subCategoryData).then(docRef1 => {
      //   console.log(docRef1);

      //   this.afs.collection('categories').doc(docRef.id).collection('subcategories').doc(docRef1.id).collection('subsubcategories').add(subCategoryData).then(docRef2 => {
      //     console.log(docRef2);
          
      //   })
      // })
      
    // }).catch(err => {
    //   console.log(err);
    // })

  }

  onEdit(category: Array<object>){
    this.formCategory = JSON.stringify(category)
    this.formStatus = 'Edit'
  }

  onDelete(id: string){
    this.categoryService.deleteData(id)
  }
}
