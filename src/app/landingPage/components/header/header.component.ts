import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

interface NavBarItems {
  route: string;
  name: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit  {

  accountName : string = "Mi cuenta";

  ngOnInit(): void {
    (localStorage.getItem('userName') != null && localStorage.getItem('userName') != undefined)  ? this.accountName = localStorage.getItem('userName')! : "Mi cuenta";
  }



  public menuItems: NavBarItems[] = [
    {route:'/home', name:'Inicio'},
    {route:'', name:'Habitaciones'},
    {route:'/galery', name:'Galeria'},
    {route:'/nosotros', name:'Nosotros'},
    {route:'/contact-us', name:'Contactanos'},
    {route:'/auth/login', name:'Mi cuenta'},
  ]
}
