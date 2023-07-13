import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationsRoutingModule } from './reservations-routing.module';
import { CustomersSiteComponent } from './pages/customers-site/customers-site.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SharedModule } from '../shared/shared.module';
import { MyReservationsComponent } from './pages/my-reservations/my-reservations.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './pages/profile/profile.component';



@NgModule({
  declarations: [
    CustomersSiteComponent,
    SidebarComponent,
    MyReservationsComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    ReservationsRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class ReservationsModule { }
