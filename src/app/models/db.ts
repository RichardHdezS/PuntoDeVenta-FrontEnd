export class User {
	
	constructor(
		public _id: string,
		public name: string,
		public nick: string,
		public email: string,
		public phone: string,
		public password: string,
		public password2: string,
        public image: string,
        public created_at : string
	){}
}

export class Client {
	
	constructor(
		public _id: String,
		public clave: String,
		public nombre: String,
		public direccion: String,
		public telefono: String,
		public saldo: Number,
	){}
}

export class Producto{
	constructor(
		public clave: string,
		public descripcion: string,
		public clasificacion: string,
		public stock: number,
		public costo: number,
		public precio: number,
	){}
}

export class Venta{
	constructor(
		public folio: string,
		public fecha: Date,
		public cliente: string,
		public importe: number,
	){}
}

export class VentaDetalle {
	
	constructor(
		public Folio: string,
		public producto: string,
		public cantidad: number,
		public precio: number,
		public importe: number,
	){}
}



export class FileClass {
	constructor(
		file: File
	){}
}