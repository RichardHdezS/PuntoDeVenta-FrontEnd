import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { VentasRoutingModule } from './ventas-routing.module';
import { RouterModule } from '@angular/router';
import { VentasComponent } from './ventas.component';
import { SharedModule } from '../share.module';


@NgModule({
  declarations: [HomeComponent, VentasComponent],
  imports: [
    CommonModule,
    RouterModule,
    VentasRoutingModule,
    SharedModule
  ]
})
export class VentasModule { }
