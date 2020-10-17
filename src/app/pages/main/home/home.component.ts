import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  identity: any;
  constructor( private userService: UserService ) { }

  ngOnInit(): void {
    this.identity = this.userService.getIdentity(); 
  }

}
