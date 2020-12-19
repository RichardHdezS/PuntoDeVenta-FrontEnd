import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { VentasRoutingModule } from './ventas-routing.module';
import { RouterModule } from '@angular/router';
import { VentasComponent } from './ventas.component';
import { SharedModule } from '../share.module';
import { VregisterComponent } from './vregister/vregister.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditVComponent } from './edit-v/edit-v.component';



@NgModule({
  declarations: [
    HomeComponent,
    VentasComponent,
    VregisterComponent,
    EditVComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    VentasRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ]
})
export class VentasModule { }
