import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { RegisterNextStepComponent } from './pages/register-next-step/register-next-step.component';

const routes: Routes = [
  {
    path:'',
    children: [
      {path:'login', component:LoginComponent},
      {path:'register', component:RegisterComponent},
      {path:'register-next-step', component:RegisterNextStepComponent},
      {path:'**', redirectTo:'login'},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
