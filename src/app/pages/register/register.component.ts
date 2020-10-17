'use strict'
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.services';
import { FileClass, User } from '../../models/user';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
	public user:User;
	public status: string = '';
	uploadForm: FormGroup; 

	constructor(private formBuilder: FormBuilder, private userService : UserService, private router : Router) {
		this.user = new User("","","","","","","","","");
	}

	ngOnInit(): void {
		this.uploadForm = this.formBuilder.group({
			name: '',
			nick: '',
			email: '',
			phone: '',
			password: '',
			password2: '',
			image: [''],
			filename: ''
		  });
	}

	onFileChange(event) {
		if (event.target.files.length > 0) {
			const file = event.target.files[0];
			this.uploadForm.get('image').setValue(file);
		}
	}

	onSubmit(){
		const formData = new FormData();
		formData.append('avatar', this.uploadForm.get('image').value);
		//console.log('formData',this.file);
		this.status = '';
		this.userService.uploadFile(formData).subscribe(
			response => {
				if (response.status){
					console.log('file uploaded');
					this.user.name = this.uploadForm.get('name').value;
					this.user.nick = this.uploadForm.get('nick').value;
					this.user.email = this.uploadForm.get('email').value;
					this.user.phone = this.uploadForm.get('phone').value;
					this.user.password = this.uploadForm.get('password').value;
					this.user.password2 = this.uploadForm.get('password2').value;
					this.user.image = this.uploadForm.get('image').value.name;
					console.log(this.user);
					this.userService.signup(this.user).subscribe(
						response => {
							console.log('signup response',response.user);
							if(response.user && response.user._id){
								console.log('Record added',response.user);
								localStorage.setItem('identity', JSON.stringify(this.user));
								this.router.navigate(['/']);
							}else{
								this.status = response.message;
							}
						},
						error => {
							this.status = 'Ocurrió un error inesperado el registro del usuario, intentelo nuevamente';
							console.log(<any>error);
						}
					);
				} else {
					this.status = response.message;
					console.log(response.message);
				}
			},
			error =>{
				this.status = 'Ocurrió un error inesperado en el alta de la imagen, intentelo nuevamente';
				console.log(<any>error);
			}
		);		
	}
}
