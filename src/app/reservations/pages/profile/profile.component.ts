import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidatorsService } from 'src/app/shared/services/validators.service';
import { NgxMaskModule } from 'ngx-mask';

declare var Swal: any;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  constructor(
    private fb: FormBuilder,
    private _validatorsService: ValidatorsService,
    private router: Router
  ) {}

  public editProfileForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
  });

  onSave(): void {
    if (this.editProfileForm.invalid) {
      this.editProfileForm.markAllAsTouched();
      return;
    }

    this.Edit(this.editProfileForm.get('email')?.value);

    this.editProfileForm.reset({ email: '' });
  }

  isValidField(field: string) {
    return this._validatorsService.isValidField(this.editProfileForm, field);
  }

  getFieldError(field: string): string | null {
    if (!this.editProfileForm.controls[field]) return null;

    const errors = this.editProfileForm.controls[field].errors || {};

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

  Edit(email: string): void {
    Swal.fire({
      icon: 'success',
      title: 'Cambios guardados',
      text: '',
    }).then(() => {
      localStorage.setItem('user', 'David');
      localStorage.setItem('email', this.editProfileForm.get('email')?.value);
      this.router.navigate(['/customer-site/main']);
    });
  }
}

