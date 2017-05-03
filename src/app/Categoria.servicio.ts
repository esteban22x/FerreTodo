import { Injectable } from '@angular/core';

import {Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Categoria } from './Categoria'


@Injectable()
export class CategoriaServicio {

  constructor(private http: Http) {

  }

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private categoriaUrl = 'http://apibobconstructor.azurewebsites.net/api/Categoria';

  getCategorias(): Promise<Categoria[]> {
    let devuelvo= this.http.get(this.categoriaUrl).toPromise();
    return devuelvo.then(response => response.json().$values as Categoria[])
      .catch(this.handleError);
  }


  getCategoria(id: number): Promise<Categoria> {
    const url = `${this.categoriaUrl}/${id}`;
    let devuelvo2 = this.http.get(url)
      .toPromise();
    return devuelvo2
      .then(response => response.json() as Categoria)
      .catch(this.handleError);
  }


  crearCategoria(categoria: Categoria): Promise<Categoria> {
    return this.http
      .post(this.categoriaUrl, JSON.stringify(categoria), { headers: this.headers })
      .toPromise()
      .then(res => res.json() as Categoria)
      .catch(this.handleError);
  }

  actualizarCategoria(categoria: Categoria): Promise<Categoria> {
    const url = `${this.categoriaUrl}/${categoria.Id}`;
    return this.http
      .put(url, JSON.stringify(categoria), { headers: this.headers })
      .toPromise()
      .then(() => categoria)
      .catch(this.handleError);
  }

  borrarCategoria(categoria: Categoria): Promise<void> {
    const url = `${this.categoriaUrl}/${categoria.Id}`;
    return this.http.delete(url, { headers: this.headers })
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Ocurrio un error', error);
    return Promise.reject(error.message || error);
  }
}