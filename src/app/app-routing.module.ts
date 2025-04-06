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
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'boardmember',
    component: BoardmemberComponent
  },
  {
    path: 'Donatenow',
    component: DonatenowComponent
  },
  {
    path: 'Photogallery',
    component: PhotogalleryComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



