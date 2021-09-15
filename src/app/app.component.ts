import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo="Registro de Usuarios"
  mensaje=""
  registrado=false
  nombre:string=""
  apellido:string=""
  entradas: Array<any>=[ ]

  constructor(){
    this.entradas=[
      {tituloEntrada:"Python cada día más presente"},
      {tituloEntrada:"Java presente desde hace más de 20 años"},
      {tituloEntrada:"JavaSript cada día más funcional"},
      {tituloEntrada:"Kotlin potencia para tus apps"},
      {tituloEntrada:"¿Dónde quedó Pascal?"}
    ]
  }


  registerUser(){
    this.registrado=true;

    this.mensaje="Usuario registrado con éxito"
  }
}
