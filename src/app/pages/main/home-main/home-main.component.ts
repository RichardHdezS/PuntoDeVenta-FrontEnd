import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.services';

@Component({
  selector: 'app-home-main',
  templateUrl: './home-main.component.html',
  styleUrls: ['./home-main.component.css']
})
export class HomeMainComponent implements OnInit {
  identity: any;
  constructor( private userService: UserService ) { }

  ngOnInit(): void {
    this.identity = this.userService.getIdentity(); 
  }

}
