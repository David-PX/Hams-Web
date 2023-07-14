import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidatorsService } from 'src/app/shared/services/validators.service';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';
import { last } from 'rxjs';
declare var Swal: any;

@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  constructor(
    private fb: FormBuilder,
    private _validatorsService: ValidatorsService,
    private authService: AuthService,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  public registerForm: FormGroup = this.fb.group(
    {
      email: ['', [Validators.required, Validators.email]],
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      password2: ['', [Validators.required, Validators.minLength(6)]]
    },
    {
      validators: [
        this._validatorsService.isFieldOneEqualFieldTwo(
          'password',
          'password2'
        ),
      ],
    }
  );

  onSave(): void {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }
    console.log('hola');

    this.Register(
      this.registerForm.get('name')?.value,
      this.registerForm.get('lastName')?.value,
      this.registerForm.get('phoneNumber')?.value,
      this.registerForm.get('email')?.value,
      this.registerForm.get('password')?.value
    );

    this.registerForm.reset({ email: '', password: '' });
  }

  isValidField(field: string) {
    return this._validatorsService.isValidField(this.registerForm, field);
  }

  getFieldError(field: string): string | null {
    if (!this.registerForm.controls[field]) return null;

    const errors = this.registerForm.controls[field].errors || {};

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

  Register(
    name: string,
    lastname: string,
    phoneNumber: string,
    email: string,
    password: string
  ): void {
    this.authService
      .register(name, lastname, phoneNumber, email, password)
      .subscribe(
        (response: any) => {
          Swal.fire({
            icon: 'success',
            title: 'Registro de cuenta exitoso',
            text: `Bienvenido`,
          }).then(() => {
            // localStorage.setItem('user', 'David');
            this.router.navigate(['/customer-site/login']);
          });
          console.log(response);
        },
        (error) => {
          Swal.fire({
            icon: 'error',
            title: 'registro Fallido',
            text: `Intente de nuevo`,
          });
          // Maneja los errores en caso de fallo en el inicio de sesión
          console.error(error);
        }
      );
  }
}
