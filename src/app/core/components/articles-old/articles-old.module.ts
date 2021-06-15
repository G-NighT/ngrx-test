import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesOldComponent } from './articles-old.component';
import { ArticlesOldRoutingModule } from './articles-old-routing.module';
import { ArticlesService } from '../../services/articles.service';

@NgModule({
  imports: [
    CommonModule,
    ArticlesOldRoutingModule
  ],
  declarations: [ArticlesOldComponent],
  exports: [ArticlesOldComponent]
})

export class ArticlesOldModule {

  //не уверен надо ли это тут делать
  static forRoot(): ModuleWithProviders<ArticlesOldModule> {
    return {
      ngModule: ArticlesOldModule,
      providers: [
        ArticlesService
      ]
    };
  }

}