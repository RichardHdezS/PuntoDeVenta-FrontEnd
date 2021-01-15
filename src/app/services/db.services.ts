
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
		console.log('Hola cliente', params);
		let headers = new HttpHeaders({'Content-Type': 'application/json','token': token });
		return this.http.get(this.url+'client/get/'+cli, { params: params, headers: headers });
    }

    create_client(data, token): Observable<any> {
		//let params = JSON.stringify(client);
		console.log(data, "Hola soy un producto");
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
	

	/**Metodos CRUD para productos */
	get_Producto(token, dataProduct=null): Observable<any>{
		let product = '';
		if (dataProduct){
			product = dataProduct;
		} else {
			product = '';
		}
		let params = {'Producto': product };
		//console.log('Hola producto', params);
		let headers = new HttpHeaders({'Content-Type': 'application/json','token': token });
		return this.http.get(this.url+'producto/get/'+product, { params: params, headers: headers });//cambiar la direccion
	}

	create_Producto(dataProduct, token): Observable<any> {
		//let params = JSON.stringify(client);
		console.log(dataProduct, "LLEGO TOKEN", token);
		console.log('Hola producto', dataProduct);
		let headers = new HttpHeaders({'Content-Type': 'application/json','token': token });
		return this.http.post(this.url+'producto/insert', {params: JSON.stringify(dataProduct)}, { headers: headers});//cambiar la direccion
    }

	delete_Producto(product:String, token): Observable<any> {
		//let params = JSON.stringify(client);
		let params = {Producto: product };
		console.log('Params',params);
		let headers = new HttpHeaders({'Content-Type': 'application/json','token': token });
		return this.http.post(this.url+'producto/remove', {params: JSON.stringify(params)} , {headers: headers});//cambiar direcciona productos
	}
	
    update_Producto(dataProduct, token): Observable<any> {
		//let params = JSON.stringify(client);
		let headers = new HttpHeaders({'Content-Type': 'application/json','token': token });
		return this.http.post(this.url+'producto/update', {params: JSON.stringify(dataProduct)}, { headers: headers});//cambiar direccion a productos
	}
	

	/****************METODOS CRUD PARA VENTAS************ */
	get_venta(token, dataVenta=null): Observable<any>{
		console.log(dataVenta,'parametro recibido');
		let venta = '';
		if (dataVenta){
			venta = dataVenta;
		} else {
			venta = '';
		}
		let params = {'Venta': venta };
		console.log('Hola venta', params);
		 let headers = new HttpHeaders({'Content-Type': 'application/json','token': token });
		return this.http.get(this.url+'venta/get/'+venta, { params: params, headers: headers });//cambiar la direccion para vebtas
	}

	create_Venta(dataVenta, token): Observable<any> {
		//let params = JSON.stringify(client);
		console.log(dataVenta+'Hola buenas mucho gusto');
		let headers = new HttpHeaders({'Content-Type': 'application/json','token': token });
		return this.http.post(this.url+'venta/insert', {params: JSON.stringify(dataVenta)}, { headers: headers});//cambiar la direccion para ventas
    }

	delete_Venta(venta:String, token): Observable<any> {
		//let params = JSON.stringify(client);
		let params = {Venta: venta };
		console.log('Params',params);
		let headers = new HttpHeaders({'Content-Type': 'application/json','token': token });
		return this.http.post(this.url+'venta/remove', {params: JSON.stringify(params)} , {headers: headers});//cambiar direcciona para ventas
	}
	
    update_Venta(dataVenta, token): Observable<any> {
		//let params = JSON.stringify(client);
		let headers = new HttpHeaders({'Content-Type': 'application/json','token': token });
		return this.http.post(this.url+'venta/update', {params: JSON.stringify(dataVenta)}, { headers: headers});//cambiar direccion para ventas
	}

	/***********Metodos Para el detalle de las ventas ****************/

	create_DlleVenta(dataVenta, token): Observable<any> {
		//let params = JSON.stringify(client);
		console.log(dataVenta+'Hola buenas mucho gusto');
		let headers = new HttpHeaders({'Content-Type': 'application/json','token': token });
		return this.http.post(this.url+'venta/insert', {params: JSON.stringify(dataVenta)}, { headers: headers});//cambiar la direccion para ventas
    }
};