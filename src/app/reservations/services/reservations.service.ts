import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Guest } from '../interfaces/Guest';

@Injectable({
  providedIn: 'root'
})
export class ReservationsService {

  private apiUrl = 'https://localhost:7137/api';

  constructor(private http: HttpClient) { }

  public Put(Id:string, guest: Guest) {
    return this.http.put(`${this.apiUrl}/Guests/${Id}`, guest);
  }
}
