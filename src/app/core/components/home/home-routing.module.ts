import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';

const crStartRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(crStartRoutes)
  ],
  exports: [RouterModule]
})

export class HomeRoutingModule { }