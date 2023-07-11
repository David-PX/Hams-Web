import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from 'src/app/shared/services/validators.service';

declare var Swal: any;
interface Reservation {
  arriveDate: string;
  exitDate: string;
  adultsCount: string;
  childrenCounts: string;
  roomType: string;
}
@Component({
  templateUrl: './my-reservations.component.html',
  styleUrls: ['./my-reservations.component.scss']
})
export class MyReservationsComponent {



  @ViewChild('exampleModal') exampleModal: any;

  constructor(public fb: FormBuilder, public _validatorsService: ValidatorsService) {}

  public reservationForm: FormGroup = this.fb.group({
    arriveDate: ['', [Validators.required,]],
    exitDate: ['', [Validators.required]],
    adultsCount: ['', [Validators.required]],
    childrenCounts: ['', [Validators.required]],
    roomType: ['Seleccione una opcion', [Validators.required]],
  })

  public ReservationList: Reservation[] = [];



  isValidField(field: string){
    return this._validatorsService.isValidField(this.reservationForm, field);
  }

  getFieldError(field: string): string | null {
    if (!this.reservationForm.controls[field]) return null;

    const errors = this.reservationForm.controls[field].errors || {};

    for(const key of Object.keys(errors)){
      switch(key){
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

  saveReservation(){
    var reservation: Reservation = {
      arriveDate: this.reservationForm.get('arriveDate')!.value,
      exitDate: this.reservationForm.get('exitDate')!.value,
      adultsCount: this.reservationForm.get('adultsCount')!.value,
      childrenCounts: this.reservationForm.get('childrenCounts')!.value,
      roomType: this.reservationForm.get('roomType')!.value,
    }


    this.ReservationList.push(reservation);


    this.reservationForm.reset();
  }


  generateRandomKey(): string {
    const min = 1000000; // Número mínimo de 7 dígitos
    const max = 9999999; // Número máximo de 7 dígitos
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNum.toString();
  }


  doCheckIn(element: any){
    console.log(element);

    Swal.fire({
      icon: 'success',
      title: 'El checkIn se ha generado correctamente. Su clave de acceso es:',
      text: this.generateRandomKey(),
      // footer: '<a href="">Why do I have this issue?</a>'
    }).then(() => {
     document.getElementById(element)!.innerText = "Check In Realizado";
    });

  }

  doCheckOut (element: any) {


    Swal.fire({
      title: 'Esta seguro?',
      text: "Se procedera a realizar el checkOut",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Check Out!'
    }).then((result: { isConfirmed: any; }) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Check Out Exitoso!',
          'Nos vemos en la siguiente',
          'success'
        ).then(() => {
          this.ReservationList.splice(element, 1);
        });
      }
    })
  }

}
