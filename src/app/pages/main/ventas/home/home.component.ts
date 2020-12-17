import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Venta } from 'src/app/models/db';
import { DBService } from 'src/app/services/db.services';
import { UserService } from 'src/app/services/user.services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ventas;
  venta: Venta;
  
  constructor(
    private router:Router,
    private database:DBService,
    private userService: UserService
  ) { }

  ngOnInit(): void {

    this.database.get_venta(this.userService.getToken()).subscribe(
      response => {
        if(response.ventas){
          this.ventas = response.ventas;
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  onDelete(venta) {
    console.log('hola');
    this.database.delete_Venta(venta, this.userService.getToken()).subscribe(
      response => {
        console.log('Rspuesta',response);
        if(response.venta){
          this.ngOnInit();
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }
/*
  onEdit(venta) {
    this.router.navigate(['main/ventas/edit',venta]);
  }
*/
}
