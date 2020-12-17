import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/models/db';
import { DBService } from 'src/app/services/db.services';
import { UserService } from 'src/app/services/user.services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productos;
  producto: Producto;
  constructor(
    private router:Router,
    private database:DBService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
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

  onDelete(productos) {

    this.database.delete_Producto(productos, this.userService.getToken()).subscribe(
      response => {
        console.log('Rspuesta',response);
        if(response.productos){
          this.ngOnInit();
          this.router.navigate(['main/productos',productos]);
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }
  onEdit(productos) {
    this.router.navigate(['main/productos/edit',productos]);
  }

}
