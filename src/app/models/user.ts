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

export class FileClass {
	constructor(
		file: File
	){}
}