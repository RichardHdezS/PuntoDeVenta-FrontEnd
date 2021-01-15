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
  clientes;
  productos;
  public statusv: String = '';

  //creamos los variables para los datos del detalle de la venta
  public dlleFolio:string;
  public dlleProducto:string;
  public dlleCantidad:number;
  public dllePrecioUni:number;
  public dlleTotal:number;
  public importeTotal:number;
  //carrito:Array<{Dfolio:string, Dproducto:string, Dcantidad:number, DprecioUni:number, dlleTotal:number}>;
  carrito=[];

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
    this.dlleFolio="";
    this.dlleProducto="";
    this.dlleCantidad=0;
    this.dllePrecioUni=0;
    this.dlleTotal=0;
    this.importeTotal=0;
    
   }

  ngOnInit(): void {
    //recogemos los clientes
    this.database.get_clients(this.userService.getToken()).subscribe(
      response => {
        if(response.clients){
          this.clientes = response.clients;
        }
      },
      error => {
        console.log(<any>error);
      }
    );
    this.database.get_Producto(this.userService.getToken()).subscribe(
      response => {
        console.log(response,'GHJ');
        if(response.productos){
          this.productos = response.productos;
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  onChange(): void {
  let producto=(<HTMLInputElement>document.getElementById("Producto")).value;
  let encuentraProducto:number;

  for(let i:number =0; i<this.productos.length; i++){
    if(producto === this.productos[i].descripcion){
      encuentraProducto=i;
    }
  }
  (<HTMLInputElement>document.getElementById("descripcion")).value = this.productos[encuentraProducto].descripcion;
    let precioProducto = this.productos[encuentraProducto].precio + "";
  (<HTMLInputElement>document.getElementById("price")).value = precioProducto;
  }

  onSubmit(){
    var data_venta = {
      folio: this.venta.value.folio,
      fecha: this.venta.value.fecha,
      cliente: this.venta.value.cliente,
      total: this.importeTotal
    }; 

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
    
    //imprimimos el arreglo del carrito
    for(let i:number=0; i<this.carrito.length; i++){
      this.database.create_DlleVenta(this.carrito[i],this.userService.getToken()).subscribe(
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
      /*
      console.log(this.carrito[i].Dfolio);
      console.log(this.carrito[i].Dproducto);
      console.log(this.carrito[i].Dcantidad);
      console.log(this.carrito[i].DprecioUni);
      console.log(this.carrito[i].Dtotal);
      console.log("************************");*/
    }
  }

  public agregaCarrito(){
    this.dlleFolio=(<HTMLInputElement>document.getElementById("folio")).value;
    this.dlleProducto=(<HTMLInputElement>document.getElementById("Producto")).value;
    this.dlleCantidad=parseInt((<HTMLInputElement>document.getElementById("cantidad")).value);
    this.dllePrecioUni=parseInt((<HTMLInputElement>document.getElementById("price")).value);
    this.dlleTotal=this.dlleCantidad*this.dllePrecioUni;
    this.importeTotal=this.importeTotal+this.dlleTotal;
    //creamos un objeto para ir guardando los datos de los productos agregados al carrito y generar el detalle
    
    var data_dventa = {
      Dfolio:this.dlleFolio,
      Dproducto:this.dlleProducto,
      Dcantidad:this.dlleCantidad,
      DprecioUni:this.dllePrecioUni,
      Dtotal:this.dlleTotal
    };
    this.carrito.push(data_dventa);//agreagmos los objetos al arreglo
    this.limpiar();
  }
  public limpiar(){
  (<HTMLInputElement>document.getElementById("cantidad")).value="";
  (<HTMLInputElement>document.getElementById("price")).value="";
  (<HTMLInputElement>document.getElementById("descripcion")).value="";
  (<HTMLInputElement>document.getElementById("Producto")).value="Selecciona el producto";
  }
}
