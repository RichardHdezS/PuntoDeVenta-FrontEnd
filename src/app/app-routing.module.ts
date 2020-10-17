import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginGuard } from './services/login.guard';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate:[LoginGuard], pathMatch: 'full'},
  { path: 'login', component: LoginComponent, canActivate:[LoginGuard] },
  { path: 'register', component: RegisterComponent, canActivate:[LoginGuard] },
  { path: 'main', loadChildren: () => import('./pages/main/main.module').then(m => m.MainModule) },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [],
  exports: [RouterModule],
})
export class AppRoutingModule { }
