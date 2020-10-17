import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserGuard } from 'src/app/services/user.guard';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main.component';

const routes: Routes = [
  { path: '', 
    component: MainComponent,
    children: [
      { path: '', component: HomeComponent, canActivate: [UserGuard]}
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [UserGuard]
})
export class MainRoutingModule { }
