import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main.component';
import { UserGuard } from '../../services/user.guard';

import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    MainComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    RouterModule,
  ],
  providers:[UserGuard],
})
export class MainModule { }
