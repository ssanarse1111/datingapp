import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //for hiding the registration content
  registerMode = false;

  constructor() { }

  ngOnInit(): void {
  }

  // method to hide the register content
  registerToggle() {
    this.registerMode = !this.registerMode;
  }

  // Cancel Register
  cancelRegisterMode(event: boolean) {
    this.registerMode = event;
  }

}
