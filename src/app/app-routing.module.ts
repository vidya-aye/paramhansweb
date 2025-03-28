import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BoardmemberComponent } from './boardmember/boardmember.component';
import { DonatenowComponent } from './donatenow/donatenow.component';
import { PhotogalleryComponent } from './photogallery/photogallery.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [

  {
    path: 'https://vidya-aye.github.io/paramhansweb/home',
    component: HomeComponent
  },

  {
    path: 'https://vidya-aye.github.io/paramhansweb/boardmember',
    component: BoardmemberComponent
  },

  {
    path: 'https://vidya-aye.github.io/paramhansweb/Donatenow',
    component: DonatenowComponent
  },

  {
    path: 'https://vidya-aye.github.io/paramhansweb/Photogallery',
    component: PhotogalleryComponent
  },


  {
    path: 'https://vidya-aye.github.io/paramhansweb/contact',
    component: ContactComponent
  },

  {

    path: 'https://vidya-aye.github.io/paramhansweb/about',
    component: AboutComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



