import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes} from '@angular/router';
import {SiteLayoutComponent} from '../layouts/site-layout/site-layout.component';
import {HomeComponent} from '../home/home.component';
import {AboutComponent} from '../about/about.component';
import {RegisterComponent} from '../register/register.component';
import {DashboardComponent} from '../dashboard/dashboard.component';
import {ProfileComponent} from '../profile/profile.component';
import {LoginComponent} from '../login/login.component';

const appRoutes: Routes = [
  {
    path: '',
    component: SiteLayoutComponent,
    children: [
      {
        path: 'home', component: HomeComponent,
        pathMatch: 'full'
      },
      {
        path: 'about', component: AboutComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      }
    ]
  },
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      }
    ]
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
