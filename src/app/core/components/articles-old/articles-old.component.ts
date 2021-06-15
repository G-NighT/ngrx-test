import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { Article } from '../../interfaces/article';
import { StorageFile } from '../../interfaces/storage-file';
import { ArticlesService } from '../../services/articles.service';

@Component({
  selector: 'app-articles-old',
  templateUrl: './articles-old.component.html',
  styleUrls: ['./articles-old.component.scss']
})

export class ArticlesOldComponent implements OnInit {

  articles: Article[] = [];
  previewImageIDs: string[] = [];
  storageFiles: StorageFile[] = [];

  constructor(
    private articlesService: ArticlesService
  ) { }

  ngOnInit() {
    this.previewImageIDs = [];
    this.articlesService.getArticleList().pipe(
      switchMap(articles => {
        this.articles = articles.applicationsView;
        this.articles.forEach(article => {
          this.previewImageIDs.push(article.previewImage);
        });
        return this.articlesService.getStorageList(this.previewImageIDs)
      })
    ).subscribe(files => {
      this.storageFiles = files;
      /* console.log(this.articles);
      console.log(this.storageFiles); */
    });
  }

}