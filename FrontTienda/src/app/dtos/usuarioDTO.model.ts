import { DireccionModel } from "../models/direccion.model";

 export class UsuarioDTOModel{


    idUsuario: number= 0;
	
	nombre: string='';
	apellido: string= '';
    email: string='';
	fechaNacimiento: string='';
	password: string='';
    direccion: DireccionModel = new DireccionModel;

}