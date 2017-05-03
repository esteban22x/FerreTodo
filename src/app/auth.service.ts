import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { Http,Headers,RequestOptions} from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class AuthService {
  constructor(private http: Http) {}
  

  login(credenciales): Promise<any> {
  	let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
  	let opciones = new RequestOptions({headers: headers});
  	let datos = `grant_type=${credenciales.grant_type}&username=${credenciales.username}&password=${credenciales.password}`;
  	return this.http.post('http://apibobconstructor.azurewebsites.net/Token',datos, opciones).toPromise()
    .then(response => localStorage.setItem('id_token',response.json().access_token))
    .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('Ocurrio un error', error);
    return Promise.reject(error.message || error);
  }
  logueado(): boolean{
  	return tokenNotExpired();
  }

  logout(): void {
    localStorage.removeItem('id_token');
  }
}
