import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { PostListComponent } from './post-list/post-list.component';
import { HomeComponent } from './home/home.component';
import { SinglePostComponent } from './single-post/single-post.component';
import { FournotfourComponent } from './fournotfour/fournotfour.component';

const route: Routes = [
  { path: '', component: HomeComponent }, 
  { path: 'posts', component: PostListComponent },
  { path: 'post/:id/:title', component: SinglePostComponent },
  { path: '**', component: FournotfourComponent } //it must always the last route
]

@NgModule({
  imports: [
    RouterModule.forRoot(route)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
