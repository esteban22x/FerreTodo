import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Credenciales } from './Credenciales';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  credencial: Credenciales;
  constructor(private auth: AuthService) { 
  }
  ngOnInit() {
    this.credencial = new Credenciales();
  }
  
  login(credencial: Credenciales){
  	this.auth.login(credencial);
  }



}
