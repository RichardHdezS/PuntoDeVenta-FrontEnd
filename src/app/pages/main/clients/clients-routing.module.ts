import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserGuard } from 'src/app/services/user.guard';
import { ClientsComponent } from './clients.component';
import { EditCliComponent } from './edit-cli/edit-cli.component';
import { HomeCliComponent } from './home/home-cli.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path : '', component: ClientsComponent, 
    children : [
      { path: '', component: HomeCliComponent, canActivate: [UserGuard] },
    ]
  },
  { path: 'register', component: RegisterComponent, canActivate: [UserGuard] },
  { path: 'edit', component: EditCliComponent, canActivate: [UserGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [UserGuard]
})
export class ClientsRoutingModule { }
