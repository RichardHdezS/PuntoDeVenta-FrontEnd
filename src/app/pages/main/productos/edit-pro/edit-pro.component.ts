import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DBService } from 'src/app/services/db.services';
import { UserService } from 'src/app/services/user.services';

@Component({
  selector: 'app-edit-pro',
  templateUrl: './edit-pro.component.html',
  styleUrls: ['./edit-pro.component.css']
})
export class EditProComponent implements OnInit {
  public producto: FormGroup;
  private sub: any;
  public clave: String;
  constructor(
    private route: ActivatedRoute,
    private database: DBService,
    private userService: UserService,
    private router: Router 
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
    this.sub = this.route.params.subscribe(params => {
      console.log('Edit-ngOnInit:', params);
      
      this.producto.setValue({
        clave: params.clave,
        descripcion: params.descripcion,
        clasificacion: params.clasificacion,
        stock: params.stock,
        costo: params.costo,
        precio: params.precio
      });
    });
  }

  onSubmit(){
    var data_producto = {
      clave: this.producto.value.clave,
      descripcion: this.producto.value.descripcion,
      clasificacion: this.producto.value.clasificacion,
      stock: this.producto.value.stock,
      costo:this.producto.value.costo,
      precio:this.producto.value.precio
    };    
    //console.log('token:',this.userService.getToken());
    this.database.update_Producto(data_producto,this.userService.getToken()).subscribe(
      response => {
        this.router.navigate(['main/productos']);
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
