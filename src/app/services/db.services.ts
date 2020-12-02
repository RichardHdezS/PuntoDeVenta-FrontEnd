
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { User, FileClass, Client } from '../models/db';
import { GLOBAL } from './global';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DBService {
    public url : string;
	public identity;
	public token;

    constructor(private http: HttpClient) { 
        this.url = GLOBAL.url;
	}
	
    get_clients(token,client=null): Observable<any> {
		let cli = '';
		if (client){
			cli = client;
		} else {
			cli = '';
		}
		let params = {'client': cli };
		console.log('Hola', params);
		let headers = new HttpHeaders({'Content-Type': 'application/json','token': token });
		return this.http.get(this.url+'client/get/'+cli, { params: params, headers: headers });
    }

    create_client(data, token): Observable<any> {
		//let params = JSON.stringify(client);
		console.log(data);
		let headers = new HttpHeaders({'Content-Type': 'application/json','token': token });
		return this.http.post(this.url+'client/insert', {params: JSON.stringify(data)}, { headers: headers});
    }

	delete_client(client:String, token): Observable<any> {
		//let params = JSON.stringify(client);
		let params = {client: client };
		console.log('Params',params);
		let headers = new HttpHeaders({'Content-Type': 'application/json','token': token });
		return this.http.post(this.url+'client/remove', {params: JSON.stringify(params)} , {headers: headers});
	}
	
    update_client(client, token): Observable<any> {
		//let params = JSON.stringify(client);
		let headers = new HttpHeaders({'Content-Type': 'application/json','token': token });
		return this.http.post(this.url+'client/update', {params: JSON.stringify(client)}, { headers: headers});
    }
};