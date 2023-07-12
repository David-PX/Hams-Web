import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface NavBarItems {
  route: string;
  name: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  {
  //ngOnInit(): void {

  //}
  public menuItems: NavBarItems[] = [
    {route:'/home', name:'Inicio'},
    {route:'', name:'Habitaciones'},
    {route:'/galeria', name:'Galeria'},
    {route:'/nosotros', name:'Nosotros'},
    {route:'/contactanos', name:'Contactanos'},
    {route:'/auth/login', name:'Mi cuenta'},
  ]
}
