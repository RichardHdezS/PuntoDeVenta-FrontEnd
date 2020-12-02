import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/models/db';
import { DBService } from 'src/app/services/db.services';
import { UserService } from 'src/app/services/user.services';

@Component({
  selector: 'app-home-cli',
  templateUrl: './home-cli.component.html',
  styleUrls: ['./home-cli.component.css']
})
export class HomeCliComponent implements OnInit {
  clients;
  client: Client;

  constructor(
    private router:Router,
    private database:DBService,
    private userService: UserService
  ) { }

  ngOnInit(): void {

    this.database.get_clients(this.userService.getToken()).subscribe(
      response => {
        if(response.clients){
          this.clients = response.clients;
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  onDelete(client) {

    this.database.delete_client(client, this.userService.getToken()).subscribe(
      response => {
        console.log('Rspuesta',response);
        if(response.client){
          this.ngOnInit();
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  onEdit(client) {
    this.router.navigate(['main/clients/edit',client]);
  }


}
