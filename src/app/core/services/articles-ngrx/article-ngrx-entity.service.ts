import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { Article } from '../../interfaces/article';

@Injectable()
export class ArticleNgRxEntityService extends EntityCollectionServiceBase<Article> {

    constructor(
        serviceElementsFactory: EntityCollectionServiceElementsFactory
    ) {
        super('Article', serviceElementsFactory);
    }

}