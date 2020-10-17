
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from '../../services/user.services';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
	public user : User;
	public identity;
	public status;
	public token;
	public email = new FormControl("");
	public password = new FormControl("");

	constructor( private userService:UserService, private router:Router) { 
	}

	ngOnInit(): void {
		console.log('Pasa onint login');
	}

	login(email, password){
		console.log('Pasa login method',email.value,password.value);
		this.userService.signin(email.value,password.value,true).subscribe(
			response => {
				console.log('Pasa login method on response',response)
				this.identity = response;
				
				if (!this.identity.user || !this.identity.user._id){
					console.log('Pasa login method on response on localstorage', this.identity.user._id);
					this.status = 'error';
				}else{
					//PERSISTIR DATOS DEL USUARIO
					console.log('Pasa login method on response on localstorage');
					localStorage.setItem('identity', JSON.stringify(this.identity));

					this.router.navigate(['/']);
				}
			},
			error => {
				var errorMessage = <any>error;
				console.log(errorMessage);

				if(errorMessage != null){
				this.status = 'error';
				}
			}
		)
		return false;
	}

}
