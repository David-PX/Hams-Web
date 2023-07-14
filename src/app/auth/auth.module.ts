import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { NgxMaskModule } from 'ngx-mask';
import { HttpClientModule } from '@angular/common/http';
import { RegisterNextStepComponent } from './pages/register-next-step/register-next-step.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    RegisterNextStepComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxMaskModule.forChild()
  ]
})
export class AuthModule { }
