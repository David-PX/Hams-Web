import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landingPage/pages/landing-page/landing-page.component';
import { NosotrosComponent } from './landingPage/pages/nosotros/nosotros.component';

const routes: Routes = [
  {
    path:'',
    component: LandingPageComponent
  },
  {
    path:'nosotros',
    component: NosotrosComponent
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
