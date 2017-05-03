import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from '../Categoria';
import { CategoriaServicio } from '../Categoria.servicio';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  categorias: Categoria[];
  categoriaSeleccionada: Categoria;
  nuevaCategoria: Categoria;

  constructor(private router: Router, private categoriaServicio: CategoriaServicio) {

  }

  ngOnInit() {
    this.categoriaServicio.getCategorias().then(categorias => this.categorias = categorias);
    this.nuevaCategoria = new Categoria();
  }

  crearCategoria(categoria: Categoria): void {

    this.categoriaServicio.crearCategoria(categoria)
      .then(categoria => {
        this.categorias.push(categoria);
        this.categoriaSeleccionada = null;
      });
  }

  borrarCategoria(categoria: Categoria): void {
    this.categoriaServicio
      .borrarCategoria(categoria)
      .then(() => {
        this.categorias = this.categorias.filter(h => h !== categoria);
        if (this.categoriaSeleccionada === categoria) { this.categoriaSeleccionada = null; }
      });
  }

  mostrarInfo(categoria: Categoria): void {
    this.categoriaSeleccionada = categoria;
    this.router.navigate(['/informacion', this.categoriaSeleccionada.Id]);
  }
}