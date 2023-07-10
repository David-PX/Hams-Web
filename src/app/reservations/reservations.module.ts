import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationsRoutingModule } from './reservations-routing.module';
import { CustomersSiteComponent } from './pages/customers-site/customers-site.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from '../landingPage/components/header/header.component';


@NgModule({
  declarations: [
    CustomersSiteComponent,
    SidebarComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    ReservationsRoutingModule,
  ]
})
export class ReservationsModule { }
