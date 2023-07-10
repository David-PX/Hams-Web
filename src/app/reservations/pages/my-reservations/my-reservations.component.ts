import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ValidatorsService } from 'src/app/shared/services/validators.service';

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

  constructor(public fb: FormBuilder, public _validatorService: ValidatorsService) {

  }

  // public loginForm: FormGroup = this.fb.group({
  //   email: ['', [Validators.required, Validators.email]],
  //   password: ['', [Validators.required]]
  // })

  public ReservationList: Reservation[] = [];






}
