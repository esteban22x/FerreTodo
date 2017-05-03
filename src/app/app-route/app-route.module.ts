import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth-guard.service'
import { CategoriaInfoComponent } from '../categoria-info/categoria-info.component';
import { ProductoInfoComponent } from '../producto-info/producto-info.component';
import { CategoriaComponent } from '../categoria/categoria.component';
import { ProductoComponent } from '../producto/producto.component';
import { LoginComponent } from '../login/login.component';

const routes: Routes = [
  { path: 'informacion/:id', component: CategoriaInfoComponent, canActivate:[AuthGuard]},
  { path: 'informacionProducto/:id', component: ProductoInfoComponent,canActivate:[AuthGuard] },
  { path: 'categoria', component: CategoriaComponent,canActivate:[AuthGuard]},
  { path: 'producto', component: ProductoComponent, canActivate:[AuthGuard]},
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }