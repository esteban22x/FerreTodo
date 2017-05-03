import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule,JsonpModule,Http,Headers,RequestOptions } from '@angular/http';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { AppComponent } from './app.component';
import { CategoriaInfoComponent } from './categoria-info/categoria-info.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { CategoriaServicio } from './Categoria.servicio';
import { ProductoServicioService } from './producto-servicio.service';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-route/app-route.module';
import { MaterialModule, MdList, MdListItem } from '@angular/material';
import { ProductoComponent } from './producto/producto.component';
import { ProductoInfoComponent } from './producto-info/producto-info.component';
import { LoginComponent } from './login/login.component'

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig(), http, options);
}
@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    MaterialModule.forRoot(),
    AppRoutingModule,
    RouterModule
  ],
  declarations: [
    AppComponent,
    CategoriaComponent,
    CategoriaInfoComponent,
    ProductoComponent,
    ProductoInfoComponent,
    LoginComponent,
  ],
  bootstrap: [AppComponent],
  providers: [AuthService,AuthGuard,CategoriaServicio,ProductoServicioService,{
    provide: AuthHttp,
    useFactory: authHttpServiceFactory,
    deps: [Http, RequestOptions]
  }]
})
export class AppModule { }