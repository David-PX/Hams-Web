import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './customers-site.component.html',
  styleUrls: ['./customers-site.component.scss']
})
export class CustomersSiteComponent implements OnInit {
  userName: string = "";

  ngOnInit(): void {
    this.userName = localStorage.getItem("userName")! + " " + localStorage.getItem("userLastName")!;
  }



}
