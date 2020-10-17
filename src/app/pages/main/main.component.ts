import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.services';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  identity:any;
  title = 'nodejs-frontend';
  imageToShow: any;
  isImageLoading: boolean;
  token: any;

  constructor(private userService: UserService, private router: Router){
     
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.;
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
