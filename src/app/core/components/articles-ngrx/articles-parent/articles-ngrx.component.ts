import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay, switchMap } from 'rxjs/operators';
import { ArticleNgRxEntityService } from 'src/app/core/services/articles-ngrx/article-ngrx-entity.service';
import { ArticlesNgRxDataService } from 'src/app/core/services/articles-ngrx/articles-ngrx-data.service';
import { ArticlesService } from 'src/app/core/services/articles.service';
import { Article } from '../../../interfaces/article';
import { StorageFile } from '../../../interfaces/storage-file';

@Component({
  selector: 'app-articles-ngrx',
  templateUrl: './articles-ngrx.component.html',
  styleUrls: ['./articles-ngrx.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ArticlesNgRxComponent implements OnInit {

  total$: Observable<number> | undefined;

  loading$: Observable<boolean> | undefined;

  articles$: Observable<Article[]> | undefined;

  previewImageIDs: string[] = [];
  storageFiles: StorageFile[] = [];

  constructor(
    private articleNgRxEntityService: ArticleNgRxEntityService,
    private articlesNgRxDataService: ArticlesNgRxDataService,
    private articlesService: ArticlesService
  ) { }

  ngOnInit() {
    this.reload();
  }

  reload() {

    this.articles$ = this.articleNgRxEntityService.entities$
      .pipe(
        map(articles => articles)
      );

    this.loading$ = this.articles$
      .pipe(
        map(articles => !!articles)
      );

    this.total$ = this.articles$
      .pipe(
        map(articles => articles.length)
      );

    /* this.previewImageIDs = [];

    if (this.loading$) {

      this.articles$.pipe(
        map(articles => {
          articles.forEach(article => {
            console.log(article);
            this.previewImageIDs.push(article.previewImage);
          });
          this.articlesService.getStorageList(this.previewImageIDs).subscribe(files => {
            this.storageFiles = files;
            console.log(this.storageFiles);
          });
        })
      );

    }; */

  };

}