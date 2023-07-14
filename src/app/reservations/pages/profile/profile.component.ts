import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidatorsService } from 'src/app/shared/services/validators.service';
import { NgxMaskModule } from 'ngx-mask';
import { ReservationsService } from '../../services/reservations.service';
import { Guest } from '../../interfaces/Guest';

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
    private router: Router,
    private _reservationService: ReservationsService
  ) {}

  public editProfileForm: FormGroup = this.fb.group({
    email: [localStorage.getItem('email'), [Validators.required, Validators.email]],
    name: [localStorage.getItem('userName'),Validators.required],
    lastName: [localStorage.getItem('userLastName'),Validators.required],
    phoneNumber:[localStorage.getItem('phoneNumber'),Validators.required]
  });

  onSave(): void {
    console.log("entrando")
    if (this.editProfileForm.invalid) {
      this.editProfileForm.markAllAsTouched();
      return;
    }

    const guest: Guest = {
      id: parseInt(localStorage.getItem('id')!),
      names: this.editProfileForm.get('name')!.value,
      lastNames: this.editProfileForm.get('lastName')!.value,
      email: this.editProfileForm.get('email')!.value,
      phoneNumber: this.editProfileForm.get('phoneNumber')!.value
    };

    this._reservationService.Put(localStorage.getItem('id')!, guest).subscribe(
      (response:any) => {
        Swal.fire({
          icon: 'success',
          title: 'Se edito correctamente',
        }).then(() => {
          localStorage.setItem('userName', guest.names);
          localStorage.setItem('userLastName', guest.lastNames);
          localStorage.setItem('email', guest.email);
          localStorage.setItem('phoneNumber', guest.phoneNumber);
        });
      },
      error => {
        console.log(error);
        Swal.fire({
          icon: 'error',
          title: 'Ha ocurrido un error',
          text: error.error.Message
        });
      }
    );
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
      title: 'Éxito',
      text: 'Cambios guardados con éxito',
    }).then(() => {
      // localStorage.setItem('user', 'David');
      localStorage.setItem('email', this.editProfileForm.get('email')?.value);
      this.router.navigate(['/customer-site/main']);
    });
  }
}

