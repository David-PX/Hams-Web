import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://localhost:7137/api/Authentication/login'; // Reemplaza con la URL real de tu endpoint de login
  private registerUrl = 'https://localhost:7137/api/Authentication';
  private resetPasswordUrl = 'https://localhost:7137/api/Authentication/resetpassword/';

  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    const body = { Email: username, Password: password };
    return this.http.post(this.apiUrl, body);
  }

  register(
    name: string,
    lastname: string,
    phoneNumber: string,
    email: string,
    password: string
  ) {
    const body = {
      names: name,
      lastNames: lastname,
      phoneNumber: phoneNumber,
      email: email,
      password: password,
    };
    return this.http.post(this.registerUrl, body);
  }

  resetPassword(
    id: number,
    oldPassword: string,
    newPassword: string,
    confirmPassword: string
  ) {
    const body = {
      userId: id,
      oldPassword: oldPassword,
      newPassword: newPassword,
      confirmPassword: confirmPassword,
    };
    return this.http.post(this.resetPasswordUrl + id, body)
  }
}
