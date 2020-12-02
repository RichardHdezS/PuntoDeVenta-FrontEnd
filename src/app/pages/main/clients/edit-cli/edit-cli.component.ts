import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DBService } from 'src/app/services/db.services';
import { UserService } from 'src/app/services/user.services';

@Component({
  selector: 'app-edit-cli',
  templateUrl: './edit-cli.component.html',
  styleUrls: ['./edit-cli.component.css']
})
export class EditCliComponent implements OnInit, OnDestroy {
  public client: FormGroup;
  private sub: any;
  public clave: String;

  constructor(
    private route: ActivatedRoute,
    private database: DBService,
    private userService: UserService,
    private router: Router ) { 
    
      this.client = new FormGroup({
        clave: new FormControl(''),
        nombre: new FormControl(''),
        direccion: new FormControl(''),
        telefono: new FormControl(''),
        saldo: new FormControl(0)
       });
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      console.log('Edit-ngOnInit:', params);
      
      this.client.setValue({
        clave: params.clave,
        nombre: params.nombre,
        direccion: params.direccion,
        telefono: params.telefono,
        saldo: params.saldo
      });
    });
  }
  

  onSubmit(){
    var data_client = {
      clave: this.client.value.clave,
      nombre: this.client.value.nombre,
      direccion: this.client.value.direccion,
      telefono: this.client.value.telefono,
      saldo:this.client.value.saldo
    };    
    //console.log('token:',this.userService.getToken());
    this.database.update_client(data_client,this.userService.getToken()).subscribe(
      response => {
        this.router.navigate(['main/clients']);
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
