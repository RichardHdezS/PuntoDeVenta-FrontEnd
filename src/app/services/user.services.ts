
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User, FileClass } from '../models/user';
import { GLOBAL } from './global';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
    public url : string;
	public identity;
	public token;

    constructor(private http: HttpClient) { 
        this.url = GLOBAL.url;
    }

    signin(email,password,gettoken=null): Observable<any> {
        
        let obj_prms = {};
        obj_prms['email'] = email;       
        obj_prms['password'] = password;       

		if(gettoken != null){
            obj_prms['gettoken'] = gettoken;
		}
		
		let params = JSON.stringify(obj_prms);
		console.log(params);
		let headers = new HttpHeaders().set('Content-Type', 'application/json');

		return this.http.post(this.url+'login',  { params, headers: headers});
    }

    signup( user:User): Observable<any> {
		let params = JSON.stringify(user);
		let headers = new HttpHeaders().set('Content-Type', 'application/json');

		return this.http.post(this.url+'register', { params, headers: headers});

    }

	getIdentity(){
		let ident = JSON.parse(localStorage.getItem('identity'));
		if(ident != null){
			this.identity = ident.user;
		}else{
			this.identity = null;
		}
		return this.identity;
	}

	getToken(){
		let ident = JSON.parse(localStorage.getItem('identity'));
		if(ident != null){
			this.token = ident.token;
		}else{
			this.token = null;
		}
		return this.token;
	}

	uploadFile(data): Observable<any>{
		console.log(data);	
		let headers = new HttpHeaders().set('Content-Type', 'application/json');
		return this.http.post(this.url+'upload-avatar', data)
	}

	getImage(image_name,token): Observable<any> {
		let headers = new HttpHeaders({token:token});
		return this.http.get(this.url+'get-avatar/'+image_name, {responseType: 'blob', headers: headers});

	}	
};