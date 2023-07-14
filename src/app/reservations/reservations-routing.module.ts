import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CustomersSiteComponent } from './pages/customers-site/customers-site.component';
import { MyReservationsComponent } from './pages/my-reservations/my-reservations.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';

const routes: Routes = [
  {
    path: '',
    component: SidebarComponent,
    children: [
      {
        path: 'main',
        component: CustomersSiteComponent,
      },
      {
        path: 'my-reservations',
        component: MyReservationsComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'change-password',
        component:ChangePasswordComponent,
      },
      {
        path: '**',
        redirectTo: 'main',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservationsRoutingModule {}
