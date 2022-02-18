import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './_models/user';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'The Dating app';
  users: any;

  // Injecting services from other files / services
  constructor(private accountService: AccountService) {}
  ngOnInit() {
    // from setCurrentUser() method
    this.setCurrentUser();
  }

  //Set Current User - from account.service.ts (If we refresh or close the browser, we still remain login)
  setCurrentUser() {
    const user: User = JSON.parse(localStorage.getItem('user'));
    // from constructor
    this.accountService.setCurrentUser(user);
  }


}
