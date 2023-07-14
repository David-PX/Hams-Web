import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  userName: string = "";

  ngOnInit(): void {
    this.userName = localStorage.getItem("userName")! + " " + localStorage.getItem("userLastName")!;
  }

  constructor(
    private router: Router
  ){}
  logOut(){
    this.router.navigate(['/home']);
    localStorage.removeItem('token');
    localStorage.removeItem('userName');
    localStorage.removeItem('userLastName');
    localStorage.removeItem('email');
    localStorage.removeItem('phoneNumber');
  }
}
