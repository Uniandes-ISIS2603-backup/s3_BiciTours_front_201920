import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { Usuario} from "./usuario"

const backUrl = "http://localhost:8080/s3_bicitours-api/api"; // URL to web api
const usuarios = "/usuario";

@Injectable()
export class UsuarioService {

  constructor(private http: HttpClient) { }
  
  /** GET usuarios del server */
  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(backUrl+usuarios);
  }

  /** GET usuario por id. Will 404 if id not found */
  getUsuario(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(backUrl+usuarios+"/"+id);
  }
  /** POST: añade un nuevo usuario al servidor */
  createUsuario(usuarioNuevo: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(backUrl+usuarios, usuarioNuevo);
  }

  /** DELETE: borrar usuario del servidor */
  deleteUsuario(usuarioEliminado: Usuario): Observable<Usuario> {
    return this.http.delete<Usuario>(backUrl+usuarios+"/"+usuarioEliminado.id);
  }

  /** PUT: actualiza el usuario del servidor */
  updateUsuario(usuarioActualizado: Usuario): Observable<any> {
    return this.http.put(backUrl+usuarios+"/"+usuarioActualizado.id, usuarioActualizado);
  }

}