import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidatorsService } from 'src/app/shared/services/validators.service';
import { AuthService } from '../../services/auth.service';
import { Injectable } from '@angular/core';

declare var Swal: any;

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private _validatorsService: ValidatorsService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if(localStorage.getItem('token') != null){
      this.router.navigate(['/customer-site/main'])
    }
    throw new Error('Method not implemented.');
  }

  public loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  onSave(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.Login(
      this.loginForm.get('email')?.value,
      this.loginForm.get('password')?.value
    );

    this.loginForm.reset({ email: '', password: '' });
  }

  isValidField(field: string) {
    return this._validatorsService.isValidField(this.loginForm, field);
  }

  getFieldError(field: string): string | null {
    if (!this.loginForm.controls[field]) return null;

    const errors = this.loginForm.controls[field].errors || {};

    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'Este campo es requerido';

        case 'minlength':
          return `Minimo ${errors['minlength'].requiredLength} caracteres`;

        case 'email':
          return `Correo Electronico Invalido`;
      }
    }
    return null;
  }

  Login(email: string, password: string): void {
    this.authService.login(email, password).subscribe(
      (response: any) => {
        Swal.fire({
          icon: 'success',
          title: 'Inicio de sesión Exitoso',
          text: `Bienvenido`,
        }).then(() => {
          // localStorage.setItem('user', 'David');
          localStorage.setItem('token', response.token);
          this.router.navigate(['/customer-site/main']);
        });
        console.log(response);
      },
      (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Inicio de sesión Fallido',
          text: `Intente de nuevo`,
        });
        // Maneja los errores en caso de fallo en el inicio de sesión
        console.error(error);
      }
    );

    // if(email === 'admin@admin.com' && password === 'admin12345'){
    //   Swal.fire({
    //     icon: 'success',
    //     title: 'Inicio de sesión Exitoso',
    //     text: 'Bienvenido David Solano'
    //   }).then(() => {
    //     localStorage.setItem("user", "David");
    //     this.router.navigate(['/customer-site/main']);
    //   });
    // }
    // else{
    //   Swal.fire({
    //     icon: 'error',
    //     title: 'Oops...',
    //     text: 'Email o contraseña incorrecto!'
    //   })
    // }
  }
}
