import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";

import { Usuario} from "./usuario"

const backUrl = "http://localhost:8080/s3_bicitours-api/api"; // URL to web api
const usuarios = "/usuario";

@Injectable()
export class UsuarioService {

 
  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  constructor(private http: HttpClient) { }
  
  /** GET usuarios del server */
  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(backUrl+usuarios);
  }

  /** GET usuario por id. Will 404 if id not found */
  getUsuario(id: number): Observable<Usuario> {
    const url = `${backUrl+usuarios}/${id}`;
    return this.http.get<Usuario>(url);
  }
  /** POST: añade un nuevo usuario al servidor */
  createUsuario(usuarioNuevo: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(backUrl+usuarios, usuarioNuevo, this.httpOptions).pipe(tap((usuarioNuevo: Usuario) => console.log(`added usuario w/ ${usuarioNuevo.nombre} id=${usuarioNuevo.id}`)));
  }

  /** DELETE: borrar usuario del servidor */
  deleteUsuario(usuarioEliminado: Usuario | number): Observable<Usuario> {
    const id = typeof usuarioEliminado === "number" ? usuarioEliminado : usuarioEliminado.id;
    const url = `${backUrl+usuarios}/${id}`;
    return this.http.delete<Usuario>(url, this.httpOptions);
  }

  /** PUT: actualiza el usuario del servidor */
  updateUsuario(usuarioActualizado: Usuario): Observable<any> {
    return this.http.put(backUrl, usuarioActualizado, this.httpOptions);
  }

}