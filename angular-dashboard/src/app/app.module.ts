import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from '../app/auth.guard';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './client/home/home.component';
import { CarreerComponent } from './client/carreer/carreer.component';
import { AboutusComponent } from './client/aboutus/aboutus.component';
const appRoutes: Routes = [
  {
    path: '', 
    component:NavbarComponent
  },
  {
    path: 'signup', 
    component:NavbarComponent
  },
  {
    path: 'login', 
    component:LoginComponent
  },
  {
    path: 'client/home', 
    component:HomeComponent,
    canActivate: [authGuard], // Apply the AuthGuard to this route
  },
  {
    path: 'client/carreer', 
    component:CarreerComponent,
    canActivate: [authGuard], // Apply the AuthGuard to this route
  },
  {
    path: 'client/aboutus', 
  component:AboutusComponent,
    canActivate: [authGuard], // Apply the AuthGuard to this route
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    CarreerComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
