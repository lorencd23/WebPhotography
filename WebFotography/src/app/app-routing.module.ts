import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListImagesComponent } from './components/list-images/list-images.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'list-images/:valor', component: ListImagesComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
