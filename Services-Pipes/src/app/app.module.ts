import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostListOneComponent } from './post-list-one/post-list-one.component';
import { PostListTwoComponent } from './post-list-two/post-list-two.component';
import { PrintArrayPipe } from './Pipes/print-array.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PostListOneComponent,
    PostListTwoComponent,
    PrintArrayPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
