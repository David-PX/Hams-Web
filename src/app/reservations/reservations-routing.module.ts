import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CustomersSiteComponent } from './pages/customers-site/customers-site.component';

const routes: Routes = [
  {
    path:'',
    component:SidebarComponent,
    children:[
      {
        path:'main',
        component:CustomersSiteComponent
      },
      {
        path:'**',
        redirectTo:'main'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservationsRoutingModule { }
