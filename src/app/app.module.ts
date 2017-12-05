import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BlaComponent } from './bla/bla.component';
import { BlubComponent } from './blub/blub.component';


@NgModule({
  declarations: [
    AppComponent,
    BlaComponent,
    BlubComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
