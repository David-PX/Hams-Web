import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Guest } from '../interfaces/Guest';
import { Reservation } from '../interfaces/Reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationsService {

  private apiUrl = 'https://localhost:7137/api';
  private integrationUrl = 'https://localhost:8000/api';



  constructor(private http: HttpClient) { }

  public Put(Id:string, guest: Guest) {
    return this.http.put(`${this.apiUrl}/Guests/${Id}`, guest);
  }



  public DoReservation(reservation: Reservation){
    const GuestId : string = localStorage.getItem("id")!;
    return this.http.post(`${this.integrationUrl}/Reservacion?habitacionDesc=${reservation.roomType}&huespedId=${GuestId}`, reservation);
  }


  public GetReservations(idHuesped: string){
    return this.http.get(`${this.integrationUrl}/Reservacion/${idHuesped}`);
  }
}
