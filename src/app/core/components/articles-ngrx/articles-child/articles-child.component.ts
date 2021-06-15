import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/core/interfaces/article';
import { StorageFile } from 'src/app/core/interfaces/storage-file';

@Component({
  selector: 'app-articles-child',
  templateUrl: './articles-child.component.html',
  styleUrls: ['./articles-child.component.scss']
})

export class ArticlesChildComponent implements OnInit {

  @Input()
  articles: Article[] | null = [];

  @Input()
  storageFiles: StorageFile[] = [];

  constructor() { }

  ngOnInit() {

  }

}
