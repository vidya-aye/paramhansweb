import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardmemberComponent } from './boardmember/boardmember.component';
import { DonatenowComponent } from './donatenow/donatenow.component';
import { PhotogalleryComponent } from './photogallery/photogallery.component';
// added for api sqlite 
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    BoardmemberComponent,
    DonatenowComponent,
    PhotogalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // added for api sqlite 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
