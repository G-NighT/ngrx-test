import { Injectable } from '@angular/core';
import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Article } from '../../interfaces/article';

@Injectable()
export class ArticlesNgRxDataService extends DefaultDataService<Article> {

    constructor(
        http: HttpClient,
        httpUrlGenerator: HttpUrlGenerator
    ) {
        super('Article', http, httpUrlGenerator);
    }

    getAll(): Observable<Article[]> {
        return this.http.get<any>('https://amaka.aznresearch.com/articles/list')
            .pipe(
                map(result => {
                    if (!result) {
                        return result;
                    };
                    return result.applicationsView;
                })
            );
    }

}
