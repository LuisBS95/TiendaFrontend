import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioDTOModel } from '../dtos/usuarioDTO.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url = 'http://localhost:8080/usuario/registrar';

  constructor(private http: HttpClient) { }


  crearUsuario( usuario: UsuarioDTOModel ) {
    const httpOptions = {
      headers: new HttpHeaders({
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      })
  };

  let headers = new HttpHeaders();
  headers = headers.set('Content-Type','application/json');

    return this.http.post(this.url , JSON.stringify(usuario),{headers: headers});
  }


}
