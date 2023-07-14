import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from 'src/app/shared/services/validators.service';
import { Reservation } from '../../interfaces/Reservation';
import { ReservationsService } from '../../services/reservations.service';

declare var Swal: any;
@Component({
  templateUrl: './my-reservations.component.html',
  styleUrls: ['./my-reservations.component.scss']
})
export class MyReservationsComponent implements OnInit {
  @ViewChild('exampleModal') exampleModal: any;

  constructor(public fb: FormBuilder, public _validatorsService: ValidatorsService, public _reservationsService: ReservationsService) {}

  ngOnInit(): void {
    this._reservationsService.GetReservations(localStorage.getItem("id")!).subscribe(
      (response:any) => {
        this.ReservationList = response;
      },
      (error) => {

      }
    )
  }

  public reservationForm: FormGroup = this.fb.group({
    arriveDate: ['', [Validators.required,]],
    exitDate: ['', [Validators.required]],
    personsCount: ['', [Validators.required]],
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
      fechaEntrada: this.reservationForm.get('arriveDate')!.value,
      fechaSalida: this.reservationForm.get('exitDate')!.value,
      cantidad: this.reservationForm.get("personsCount")!.value,
      roomType: this.reservationForm.get('roomType')!.value,
    }


    this._reservationsService.DoReservation(reservation).subscribe(
    (response:any) => {
      console.log("entrando");
      Swal.fire({
        icon: 'success',
        text: `Su reservación se ha creado con exito`,
      }).then(() => {
        this.ReservationList.push(reservation);
      });
    },
    (error) =>{
      Swal.fire({
        icon: 'error',
        text: `Ha ocurrido un error`,
      })
    });

    this.reservationForm.reset();
  }


  generateRandomKey(): string {
    const min = 1000000; // Número mínimo de 7 dígitos
    const max = 9999999; // Número máximo de 7 dígitos
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNum.toString();
  }





}
