import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserGuard } from 'src/app/services/user.guard';
import { VentasComponent } from './ventas.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path : '', component: VentasComponent, 
    children : [
      { path: '', component: HomeComponent, canActivate: [UserGuard] },
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [UserGuard]
})
export class VentasRoutingModule { }
