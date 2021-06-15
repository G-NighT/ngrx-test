import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../interfaces/article';
import { StorageFile } from '../interfaces/storage-file';

@Injectable({
  providedIn: 'root'
})

export class ArticlesService {

  constructor(
    private http: HttpClient
  ) { }

  getArticleList(): Observable<any> {
    return this.http.get<any>('https://amaka.aznresearch.com/articles/list');
  }

  getStorageList(ids: string[]): Observable<StorageFile[]> {
    let params = new HttpParams();
    ids.forEach((id: string, index: number) => {
      params = params.append(`ids`, id);
    })
    return this.http.get<StorageFile[]>('https://amaka.aznresearch.com/storage/list', { params });
  }

}