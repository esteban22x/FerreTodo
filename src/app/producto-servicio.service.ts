import { Injectable } from '@angular/core';
import {Http, Headers } from '@angular/http';
import {Producto} from './Producto';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProductoServicioService {

  constructor(private http : Http) { }

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private productoUrl = 'http://apibobconstructor.azurewebsites.net/api/Producto';

  getProductos(): Promise<Producto[]> {
    let devuelvo= this.http.get(this.productoUrl).toPromise();
    return devuelvo.then(response => response.json().$values as Producto[])
      .catch(this.handleError);
  }
  getProducto(id: number): Promise<Producto> {
    const url = `${this.productoUrl}/${id}`;
    let devuelvo2 = this.http.get(url)
      .toPromise();
    console.log("pasa por aca");
    devuelvo2.then(response=> console.log(response.json()));
    return devuelvo2
      .then(response => response.json() as Producto)
      .catch(this.handleError);
  }
  actualizarProducto(producto: Producto): Promise<Producto> {
    const url = `${this.productoUrl}/${producto.Id}`;
    return this.http
      .put(url, JSON.stringify(producto), { headers: this.headers })
      .toPromise()
      .then(() => producto)
      .catch(this.handleError);
  }
  crearProducto(producto: Producto): Promise<Producto> {
    return this.http
      .post(this.productoUrl, JSON.stringify(producto), { headers: this.headers })
      .toPromise()
      .then(res => res.json() as Producto)
      .catch(this.handleError);
  }
  borrarProducto(producto: Producto): Promise<void> {
    const url = `${this.productoUrl}/${producto.Id}`;
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
