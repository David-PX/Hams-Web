import { Component } from '@angular/core';
import { Validator, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { ValidatorsService } from 'src/app/shared/services/validators.service';
declare var Swal: any;

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent {
  constructor(
    private fb: FormBuilder,
    private _validatorsService: ValidatorsService,
    private authService: AuthService,
    private router: Router
  ) {}

  public changePasswordForm: FormGroup = this.fb.group({
    oldPassword: ['', [Validators.required]],
    newPassword: ['', Validators.required],
    confirmPassword: ['', Validators.required],
  });

  onSave(): void {
    if (this.changePasswordForm.invalid) {
      this.changePasswordForm.markAllAsTouched();
      return;
    }

    this.ResetPassword(
      parseInt(localStorage.getItem('id')!),
      this.changePasswordForm.get('oldPassword')?.value,
      this.changePasswordForm.get('newPassword')?.value,
      this.changePasswordForm.get('confirmPassword')?.value
    );

    this.changePasswordForm.reset({ email: '', password: '' });
  }

  isValidField(field: string) {
    return this._validatorsService.isValidField(this.changePasswordForm, field);
  }

  getFieldError(field: string): string | null {
    if (!this.changePasswordForm.controls[field]) return null;

    const errors = this.changePasswordForm.controls[field].errors || {};

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

  ResetPassword(
    id: number,
    oldPassword: string,
    newPassword: string,
    confirmPassword: string
  ): void {
    this.authService
      .resetPassword(id, oldPassword, newPassword, confirmPassword)
      .subscribe(
        (response: any) => {
          Swal.fire({
            icon: 'success',
            title: 'Actualización exitosa!',
            text: `Contraseña actualizada correctamente`,
          });
          this.router.navigate(['/customer-site/main']);
          
        },
        (error) => {
          Swal.fire({
            icon: 'error',
            title: 'Registro Fallido',
            text: error.error.message,
          });
          // Maneja los errores en caso de fallo en el inicio de sesión
          console.error(error);
        }
      );
  }
}
