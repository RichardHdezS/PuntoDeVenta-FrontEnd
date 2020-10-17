import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UserService } from './user.services';

@Injectable()
export class UserGuard implements CanActivate{

	constructor(
		private router: Router,
		private userService: UserService
		){}

	canActivate(){
		let identity = this.userService.getIdentity();

		if(identity != null){
			return true;
		}else{
			this.router.navigate(['/login']);
			return false;
		}
	}
}