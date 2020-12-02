import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadMainComponent } from './head-main/head-main.component';
import { MainRoutingModule } from './main-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeadMainComponent
  ],
  imports: [
    CommonModule,

  ],
  exports: [
    HeadMainComponent
  ],
  providers: [
    HeadMainComponent
  ]
})
export class SharedModule { }