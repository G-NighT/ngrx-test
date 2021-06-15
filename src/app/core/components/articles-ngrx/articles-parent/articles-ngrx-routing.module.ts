import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ArticlesNgRxComponent } from './articles-ngrx.component';
import { ArticlesNgRxResolver } from '../../../services/articles-ngrx/articles-ngrx.resolver';

const articleNgRxRoutes: Routes = [
  {
    path: '',
    component: ArticlesNgRxComponent,
    resolve: {
      articles: ArticlesNgRxResolver
    }
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(articleNgRxRoutes)
  ],
  exports: [RouterModule]
})

export class ArticlesNgRxRoutingModule { }