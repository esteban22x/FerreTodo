import 'rxjs/add/operator/switchMap'
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { CategoriaServicio } from '../Categoria.servicio';
import { Producto } from '../Producto';
import { Categoria } from '../Categoria';
import { ProductoServicioService } from '../producto-servicio.service';


@Component({
  selector: 'app-producto-info',
  templateUrl: './producto-info.component.html',
  styleUrls: ['./producto-info.component.css']
})
export class ProductoInfoComponent implements OnInit {

  producto: Producto;
  categorias: Categoria[];

  constructor(
    private productoServicio: ProductoServicioService,
    private categoriaServicio: CategoriaServicio,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.params.switchMap((params: Params) => this.productoServicio.getProducto(+params['id']))
      .subscribe(producto => this.producto = producto);
    this.categoriaServicio.getCategorias().then(categorias => this.categorias = categorias);

  }
  actualizar(): void {
    this.productoServicio.actualizarProducto(this.producto);
    this.devolver();
  }
  devolver(): void {
    this.location.back();
  }

}