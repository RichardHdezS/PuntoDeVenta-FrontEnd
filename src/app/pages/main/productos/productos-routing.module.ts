import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserGuard } from 'src/app/services/user.guard';
import { ProductosComponent } from './productos.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { EditProComponent } from './edit-pro/edit-pro.component';

const routes: Routes = [
  { path : '', component: ProductosComponent, 
    children : [
      { path: '', component: HomeComponent, canActivate: [UserGuard] },
    ]
  },
  { path: 'register', component: RegisterComponent, canActivate: [UserGuard] },
  { path: 'edit', component: EditProComponent, canActivate: [UserGuard] },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [UserGuard]
})
export class ProductosRoutingModule { }
