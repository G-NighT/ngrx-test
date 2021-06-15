import { CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesChildComponent } from './articles-child/articles-child.component';
import { ArticlesNgRxComponent } from './articles-parent/articles-ngrx.component';
import { ArticlesNgRxRoutingModule } from './articles-parent/articles-ngrx-routing.module';
import { MatCardModule } from '@angular/material/card';
import { EntityDataService, EntityDefinitionService, EntityMetadata, EntityMetadataMap } from '@ngrx/data';
import { ArticlesNgRxResolver } from '../../services/articles-ngrx/articles-ngrx.resolver';
import { ArticlesNgRxDataService } from '../../services/articles-ngrx/articles-ngrx-data.service';
import { ArticleNgRxEntityService } from '../../services/articles-ngrx/article-ngrx-entity.service';

const entityMetadata: EntityMetadataMap = {
  Article: {
    /* entityDispatcherOptions: {
        optimisticUpdate: true
    } */
  },
  StorageFiles: {}
};

@NgModule({
  imports: [
    CommonModule,
    ArticlesNgRxRoutingModule,
    MatCardModule,
    /* EffectsModule.forFeature([ArticlesEffects]),
    StoreModule.forFeature("articles", articlesReducer) */
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    ArticlesNgRxComponent,
    ArticlesChildComponent
  ],
  exports: [
    ArticlesNgRxComponent,
    ArticlesChildComponent
  ],
  providers: [
    ArticleNgRxEntityService,
    ArticlesNgRxResolver,
    ArticlesNgRxDataService
  ]
})

export class ArticlesNgRxModule {

  constructor(
    private eds: EntityDefinitionService,
    private entityDataService: EntityDataService,
    private articlesNgRxDataService: ArticlesNgRxDataService
  ) {

    eds.registerMetadataMap(entityMetadata);

    entityDataService.registerService('Article', articlesNgRxDataService);

  }

}