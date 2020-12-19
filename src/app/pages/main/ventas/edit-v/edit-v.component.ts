import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DBService } from 'src/app/services/db.services';
import { UserService } from 'src/app/services/user.services';

@Component({
  selector: 'app-edit-v',
  templateUrl: './edit-v.component.html',
  styleUrls: ['./edit-v.component.css']
})
export class EditVComponent implements OnInit {
  public venta: FormGroup;
  private sub: any;
  public folio: String;

  constructor(
    private route: ActivatedRoute,
    private database: DBService,
    private userService: UserService,
    private router: Router
  ) {
    this.venta = new FormGroup({
      folio: new FormControl(''),
      fecha: new FormControl(''),
      cliente: new FormControl(''),
      total: new FormControl(0)
  });
}



  ngOnInit(): void {
  }

}
