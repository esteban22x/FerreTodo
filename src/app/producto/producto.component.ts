import { Component, OnInit } from '@angular/core';
import { Producto } from '../Producto';
import { Categoria } from '../Categoria';
import { Router } from '@angular/router';
import { ProductoServicioService } from '../producto-servicio.service';
import { CategoriaServicio } from '../Categoria.servicio';
@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

	productos: Producto[];
	categorias: Categoria[];
	productoSeleccionado: Producto;
	nuevoProducto: Producto;

  constructor(private router: Router, private productoServicio: ProductoServicioService,private categoriaServicio: CategoriaServicio) 
  { }

  ngOnInit() {
  	this.productoServicio.getProductos().then(productos => this.productos = productos);
  	this.categoriaServicio.getCategorias().then(categorias => this.categorias = categorias);
  	this.nuevoProducto = new Producto();
  }
    mostrarInfo(producto: Producto): void {
    this.productoSeleccionado = producto;
    this.router.navigate(['/informacionProducto', this.productoSeleccionado.Id]);
  }
  crearProducto(producto: Producto): void {

    this.productoServicio.crearProducto(producto)
      .then(producto => {
        this.productos.push(producto);
        this.productoSeleccionado = null;
      });
  }

  borrarProducto(producto: Producto): void {
    this.productoServicio
      .borrarProducto(producto)
      .then(() => {
        this.productos = this.productos.filter(h => h !== producto);
        if (this.productoSeleccionado === producto) { this.productoSeleccionado = null; }
      });
  }





}
