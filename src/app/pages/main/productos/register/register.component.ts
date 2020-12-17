import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/models/db';
import { DBService } from 'src/app/services/db.services';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public producto: any;
  public status: String = '';

  constructor(
    private router:Router,
    private database:DBService,
    private userService: UserService
  ) {
    this.producto = new FormGroup({
      clave: new FormControl(''),
      descripcion: new FormControl(''),
      clasificacion: new FormControl(''),
      stock: new FormControl(0),
      costo: new FormControl(0),
      precio: new FormControl(0)
    });
   }

  ngOnInit(): void {
  }

	onSubmit(){
    var data_producto = {
      clave: this.producto.value.clave,
      descripcion: this.producto.value.descripcion,
      clasificacion: this.producto.value.clasificacion,
      stock: this.producto.value.stock,
      costo: this.producto.value.costo,
      precio: this.producto.value.precio
    };    
    //console.log('token:',this.userService.getToken());
    this.database.create_Producto(data_producto,this.userService.getToken()).subscribe(
      response => {
        if(response.producto && response.producto._id){
          console.log('Record added',response.producto);
          this.router.navigate(['main/productos']);
        }else{
          this.status = response.message;
        }
      },
      error => {
        this.status = 'Ocurrió un error inesperado el registro del usuario, intentelo nuevamente';
        console.log(<any>error);
      }
    );
}

}
