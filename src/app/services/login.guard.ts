import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UserService } from './user.services';

@Injectable()
export class LoginGuard implements CanActivate{

	constructor(
		private userService: UserService,
		private router: Router
		){}

	canActivate(){
		let identity = this.userService.getIdentity();

		if(identity){
			this.router.navigate(['/main']);
			return false;
		}else{
			return true;
		}
	}
}