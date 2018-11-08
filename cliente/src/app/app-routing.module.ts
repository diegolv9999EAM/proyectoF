import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LugaresComponent} from '../app/components/lugares/lugares.component';
import {UsuariosComponent} from '../app/components/usuarios/usuarios.component';

import {LoginComponent} from './components/login/login.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {HomeComponent} from './components/home/home.component';
const routes: Routes = [
  { path: 'places', component: LugaresComponent},
  { path: 'users',  component: UsuariosComponent},
  { path: '', component: HomeComponent},
 // {path: '**',component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'dashboard', component: DashboardComponent}
 // {path: '',pathMatch: 'full',redirectTo: "places"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
