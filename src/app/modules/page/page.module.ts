import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageRoutingModule } from './page-routing.module';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';


@NgModule({
  declarations: [
    Page1Component,
    Page2Component
  ],
  imports: [
    CommonModule,
    PageRoutingModule
  ]
})
export class PageModule { }
