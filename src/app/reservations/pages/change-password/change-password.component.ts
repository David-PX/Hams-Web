import { Component } from '@angular/core';
import { Validator, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ValidatorsService } from 'src/app/shared/services/validators.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent {
constructor(
  private fb: FormBuilder,
  private _validatorsService: ValidatorsService

){}

  public changePasswordForm: FormGroup = this.fb.group({
    actualPassword: ['', [Validators.required, Validators.email]],
    newPassword: ['', Validators.required],
    newPassword2: ['', Validators.required],
  });

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
}
