import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./core/components/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'old',
    loadChildren: () => import('./core/components/articles-old/articles-old.module').then(m => m.ArticlesOldModule)
  },
  {
    path: 'ngrx',
    loadChildren: () => import('./core/components/articles-ngrx/articles-ngrx.module').then(m => m.ArticlesNgRxModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }