import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { UserGuard } from '../../services/user.guard';

import { RouterModule } from '@angular/router';
import { HomeMainComponent } from './home-main/home-main.component';
import { SharedModule } from './share.module';
import { HeadMainComponent } from './head-main/head-main.component';



@NgModule({
  declarations: [
    MainComponent,
    HomeMainComponent,
    
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    RouterModule,
    SharedModule

  ],
  providers:[UserGuard],
})
export class MainModule { }
