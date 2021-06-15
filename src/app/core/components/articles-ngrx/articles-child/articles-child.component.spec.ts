/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ArticlesChildComponent } from './articles-child.component';

describe('ArticlesChildComponent', () => {
  let component: ArticlesChildComponent;
  let fixture: ComponentFixture<ArticlesChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ArticlesChildComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
