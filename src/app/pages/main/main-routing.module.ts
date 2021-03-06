import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserGuard } from 'src/app/services/user.guard';
import { HomeMainComponent } from './home-main/home-main.component';
import { MainComponent } from './main.component';

const routes: Routes = [
  { path: '', 
    component: MainComponent,
    children: [
      { path: '', component: HomeMainComponent, canActivate: [UserGuard] },
    ]
  },
  { path: 'clients', loadChildren: () => import('./clients/clients.module').then(m => m.ClientsModule) },
  { path: 'productos', loadChildren: () => import('./productos/productos.module').then(m => m.ProductosModule) },
  { path: 'ventas', loadChildren: () => import('./ventas/ventas.module').then(m => m.VentasModule) },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [UserGuard]
})
export class MainRoutingModule { }
