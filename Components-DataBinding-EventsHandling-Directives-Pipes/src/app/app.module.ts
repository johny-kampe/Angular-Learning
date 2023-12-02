import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PassOrderComponent } from './pass-order/pass-order.component';
import { ReceiveOrderComponent } from './receive-order/receive-order.component';

@NgModule({
  declarations: [
    AppComponent,
    PassOrderComponent,
    ReceiveOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
