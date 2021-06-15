import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Article } from '../../interfaces/article';
import { StorageFile } from '../../interfaces/storage-file';

@Injectable({
  providedIn: 'root'
})

export class ArticlesNgrxHttpService {

  constructor(
    private http: HttpClient
  ) { }

  getArticleList(): Observable<Article[]> {
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

  getStorageList(ids: string[]): Observable<StorageFile[]> {
    let params = new HttpParams();
    ids.forEach((id: string, index: number) => {
      params = params.append(`ids`, id);
    })
    return this.http.get<StorageFile[]>('https://amaka.aznresearch.com/storage/list', { params });
  }

}