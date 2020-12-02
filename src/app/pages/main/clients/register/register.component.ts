import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/models/db';
import { DBService } from 'src/app/services/db.services';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.services';

@Component({
  selector: 'cli-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public client: any;
  public status: String = '';

  constructor(
    private router:Router,
    private database:DBService,
    private userService: UserService
  ) {
    this.client = new FormGroup({
      clave: new FormControl(''),
      nombre: new FormControl(''),
      direccion: new FormControl(''),
      telefono: new FormControl(''),
      saldo: new FormControl(0)
    });
  }

  ngOnInit(): void {
  }

	onSubmit(){
    var data_client = {
      clave: this.client.value.clave,
      nombre: this.client.value.nombre,
      direccion: this.client.value.direccion,
      telefono: this.client.value.telefono,
      saldo: 0
    };    
    //console.log('token:',this.userService.getToken());
    this.database.create_client(data_client,this.userService.getToken()).subscribe(
      response => {
        if(response.client && response.client._id){
          console.log('Record added',response.client);
          this.router.navigate(['main/clients']);
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