import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './services/user.services';
import { CommService } from './services/comm.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'nodejs-frontend';
  identity: any;

  constructor(private userService: UserService){
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.;
    this.identity = this.userService.getIdentity(); 
    console.log('pasa app.component oninit');
  }

  cerrarSesion(){
    localStorage.clear();
    this.identity = null;
  }  
}
