import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.services';

@Component({
  selector: 'app-head-main',
  templateUrl: './head-main.component.html',
  styleUrls: ['./head-main.component.css']
})
export class HeadMainComponent implements OnInit {
  imageToShow: any;
  isImageLoading: boolean;
  identity:any;
  token: any;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  
    this.identity = this.userService.getIdentity(); 
    this.token = this.userService.getToken(); 
    console.log('pasa app.component oninit',this.token);
    this.getAvatarFromService();
  }

  cerrarSesion(){
    localStorage.clear();
    this.identity = null;
  }

  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
       this.imageToShow = reader.result;
    }, false);
 
    if (image) {
       reader.readAsDataURL(image);
    }
   }

  getAvatarFromService() {
    this.isImageLoading = true;
    console.log('getAvatarFromService',this.identity.image)
    if (this.identity.image) {
      this.userService.getImage(this.identity.image,this.token).subscribe(
        data => {
          this.createImageFromBlob(data);
          this.isImageLoading = false;
        }, error => {
          this.isImageLoading = false;
          console.log('Error',error);
      });
    }
  }  
}
