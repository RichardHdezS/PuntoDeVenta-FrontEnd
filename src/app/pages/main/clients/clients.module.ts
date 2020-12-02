import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsComponent } from './clients.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { HomeCliComponent } from './home/home-cli.component';
import { SharedModule } from '../share.module';
import { EditCliComponent } from './edit-cli/edit-cli.component';


@NgModule({
  declarations: [
    ClientsComponent,
    RegisterComponent,
    HomeCliComponent,
    EditCliComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ClientsRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ]
})
export class ClientsModule { }
