import { HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LugaresComponent } from './components/lugares/lugares.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {FormsModule} from '@angular/forms';

import {PlacesService} from './_services/places.service';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LugaresComponent,
    LoginComponent,
    RegistroComponent,
    DashboardComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PlacesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
