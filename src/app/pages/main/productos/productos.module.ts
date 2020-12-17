import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ProductosRoutingModule } from './productos-routing.module';
import { RouterModule } from '@angular/router';
import { ProductosComponent } from './productos.component';
import { SharedModule } from '../share.module';
import { RegisterComponent } from './register/register.component';
import { EditProComponent } from './edit-pro/edit-pro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [HomeComponent, ProductosComponent, RegisterComponent, EditProComponent],
  imports: [
    CommonModule,
    RouterModule,
    ProductosRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProductosModule { }
