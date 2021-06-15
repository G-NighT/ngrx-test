import { NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppHeaderComponent } from './common/app-header/app-header.component';
import { AppFooterComponent } from './common/app-footer/app-footer.component';
import { AuthGuard } from '../core/guards/auth.guard';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AppHeaderComponent,
    AppFooterComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    CommonModule,
    AppHeaderComponent,
    AppFooterComponent,
    HttpClientModule
  ]
})

export class SharedModule {
  //тут можно передать Guard в providers статик метода forRoot() - вот так
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [
        AuthGuard
      ]
    };
  }
}