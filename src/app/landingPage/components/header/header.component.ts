import { Component, OnInit } from '@angular/core';

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
  // ngOnInit(): void {

  // }
  public menuItems: NavBarItems[] = [
    {route:'/', name:'Inicio'},
    {route:'', name:'Habitaciones'},
    {route:'', name:'Galeria'},
    {route:'', name:'Nosotros'},
    {route:'', name:'Contactanos'},
    {route:'/auth/login', name:'Mi cuenta'},
  ]
}
