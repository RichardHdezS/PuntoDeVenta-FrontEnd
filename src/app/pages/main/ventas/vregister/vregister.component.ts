import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { VentaDetalle, Venta } from 'src/app/models/db';
import { Client, Producto } from 'src/app/models/db';
import { DBService } from 'src/app/services/db.services';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.services';

@Component({
  selector: 'venta-vregister',
  templateUrl: './vregister.component.html',
  styleUrls: ['./vregister.component.css']
})
export class VregisterComponent implements OnInit {
  public venta: any;
  public dventa: any;
  cliente:Client[];
  producto:Producto[];
  public statusv: String = '';


  constructor(
    private router:Router,
    private database:DBService,
    private userService: UserService
  ) {
    this.venta = new FormGroup({
      folio: new FormControl(''),
      fecha: new FormControl(''),
      cliente: new FormControl(''),
      total: new FormControl(0)
    });
   }

  ngOnInit(): void {
    //this.cliente = this.database.get_clients();
    //this.producto = this.database.get_Producto();
  }

  onSubmit(){
    var data_venta = {
      folio: this.venta.value.folio,
      fecha: this.venta.value.fecha,
      cliente: this.venta.value.cliente,
      total: 0
    }; 

    var data_dventa = {

    }
    //console.log('token:',this.userService.getToken());
    this.database.create_Venta(data_venta,this.userService.getToken()).subscribe(
      response => {
        if(response.venta && response.venta._id){
          console.log('Record added',response.venta);
          this.router.navigate(['main/ventas']);
        }else{
          this.statusv = response.message;
        }
      },
      error => {
        this.statusv = 'Ocurrió un error inesperado el registro del usuario, intentelo nuevamente';
        console.log(<any>error);
      }
    );
  }

}
