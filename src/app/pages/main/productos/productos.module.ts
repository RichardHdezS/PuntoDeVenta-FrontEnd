import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ProductosRoutingModule } from './productos-routing.module';
import { RouterModule } from '@angular/router';
import { ProductosComponent } from './productos.component';
import { SharedModule } from '../share.module';


@NgModule({
  declarations: [HomeComponent, ProductosComponent],
  imports: [
    CommonModule,
    RouterModule,
    ProductosRoutingModule,
    SharedModule
  ]
})
export class ProductosModule { }
