import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppHeaderComponent implements OnInit {

  constructor(
    private renderer: Renderer2,
    private cdr: ChangeDetectorRef
  ) { }

  updatePage() {
    this.cdr.reattach();
    if (this.cdr) {
      this.cdr.markForCheck();
    };
  }

  ngOnInit() { }

}