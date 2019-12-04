import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import {NgxRolesService, NgxPermissionsService} from 'ngx-permissions';
import {Router} from '@angular/router';

import { Usuario} from "./usuario"
import { UsuarioDetail } from './usuario-detail';

const backUrl = "http://localhost:8080/s3_bicitours-api/api"; // URL to web api
const usuarios = "/usuario";

@Injectable()
export class UsuarioService {
  /** Constructor del servicio Usuario
     * @param router Router de angular para redireccionar al usuario en login o logout
     * @param roleService NgxRolesService para manejar autenticaciones de rol (según ejemplo de front-pregrado201920)
     * @param permissionsService NgxPermissionsService para manejar autenticaciones de rol
     */
  constructor(private router: Router,private http: HttpClient) { }
  
     //Funciones para creación y cambio de autenticación (según front-pregrado201920)
  /** Start: reinicia los estados de autenticación*
  start (): void {
    this.permissionsService.flushPermissions();
    this.roleService.flushRoles();
    this.permissionsService.loadPermissions(['edit_author_permission', 'delete_author_permission', 'leave_review']);
    const role = localStorage.getItem('role');
    if (!role) {
        this.setUnloggedRole();
    } else if (role === 'ADMIN') {
        this.setAdministratorRole();
    } else {
        this.setUserRole();
    }
}
/** No registrado: actualiza el usuario a UNLOGGED *
setUnloggedRole (): void {
    this.roleService.flushRoles();
    this.roleService.addRole('UNLOGGED', ['']);
}
/** Registrado: actualiza el usuario a USER *
setUserRole (): void {
    this.roleService.flushRoles();
    this.roleService.addRole('USER', ['leave_review']);
    localStorage.setItem('role', 'USER');
}
/** Administrador: actualiza el usuario a ADMIN *
setAdministratorRole (): void {
    this.roleService.flushRoles();
    this.roleService.addRole('ADMIN', ['edit_author_permission', 'delete_author_permission']);
    localStorage.setItem('role', 'ADMIN');
}
/** Imprimir rol: imprime en consola el rol del usuario actual *
printRole (): void {
    console.log(this.roleService.getRoles());
}

/** Loggea el usuario en el rol deseado
 * @param role El rol deseado a registrar *
login (role): void {
    if (role === 'ADMIN') {
        this.setAdministratorRole();
    } else {
        this.setUserRole()
    }
    this.router.navigateByUrl('/home');
}

/** Desconectar: desconecta al usuario cambiando su rol a UNLOGGED *
logout (): void {
    this.roleService.flushRoles();
    this.setUnloggedRole();
    localStorage.removeItem('role');
    this.router.navigateByUrl('/');
}

  // Funciones para comunicación con Back mediante Html
  /** GET usuarios del server */
  getUsuarios(): Observable<UsuarioDetail[]> {
    return this.http.get<UsuarioDetail[]>(backUrl+usuarios);
  }

  /** GET usuario por id. Will 404 if id not found */
  getUsuario(id: number): Observable<UsuarioDetail> {
    return this.http.get<UsuarioDetail>(backUrl+usuarios+"/"+id);
  }
  /** GET usuario por correo y contraseña. Will 404 if id not found */
  getUsuarioByCorreoClave(correo: String, clave: String): Observable<UsuarioDetail> {
    return this.http.get<UsuarioDetail>(backUrl+usuarios+"/");
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