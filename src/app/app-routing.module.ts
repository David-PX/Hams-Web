import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landingPage/pages/landing-page/landing-page.component';
import { ContactUsComponent } from './landingPage/pages/contact-us/contact-us.component';

const routes: Routes = [
  {
    path:'',
    component: LandingPageComponent
  },
  {
    path:'contact-us',
    component: ContactUsComponent
  },
  {
    path:'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },
  {
    path:'customer-site',
    loadChildren: () => import('./reservations/reservations.module').then(m => m.ReservationsModule),
  },
  {
    path:'**',
    redirectTo:''
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
