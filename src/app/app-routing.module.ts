import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landingPage/pages/landing-page/landing-page.component';
import { ContactUsComponent } from './landingPage/pages/contact-us/contact-us.component';
import { GaleryPageComponent } from './landingPage/pages/galery-page/galery-page.component';
import { NosotrosComponent } from './landingPage/pages/nosotros/nosotros.component';
import { authGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    component: LandingPageComponent,
  },
  {
    path: 'contact-us',
    component: ContactUsComponent,
  },
  {
    path: 'galery',
    component: GaleryPageComponent,
  },
  {
    path: 'nosotros',
    component: NosotrosComponent,
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'customer-site',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./reservations/reservations.module').then(
        (m) => m.ReservationsModule
      ),
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
