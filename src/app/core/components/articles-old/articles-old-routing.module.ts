import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ArticlesOldComponent } from './articles-old.component';

const crStartRoutes: Routes = [
  {
    path: '',
    component: ArticlesOldComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(crStartRoutes)
  ],
  exports: [RouterModule]
})

export class ArticlesOldRoutingModule { }