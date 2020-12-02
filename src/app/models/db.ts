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



export class FileClass {
	constructor(
		file: File
	){}
}