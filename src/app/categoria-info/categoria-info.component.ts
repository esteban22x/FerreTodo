import 'rxjs/add/operator/switchMap'
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Categoria } from '../Categoria';
import { CategoriaServicio } from '../Categoria.servicio'


@Component({
  selector: 'app-categoria-info',
  templateUrl: './categoria-info.component.html',
  styleUrls: ['./categoria-info.component.css']
})
export class CategoriaInfoComponent implements OnInit {

  categoria: Categoria;

  constructor(
    private categoriaServicio: CategoriaServicio,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.params.switchMap((params: Params) => this.categoriaServicio.getCategoria(+params['id']))
      .subscribe(categoria => this.categoria = categoria);
  }
  actualizar(): void {
    this.categoriaServicio.actualizarCategoria(this.categoria);
    this.devolver();
  }
  devolver(): void {
    this.location.back();
  }

}