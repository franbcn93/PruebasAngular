import { Component, OnInit } from '@angular/core';
import { Empleado } from './empleado.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  tituloListado="Listado de Empleados"

  empleados:Empleado[]=[
    new Empleado("Paco", "París", "Rey", 7000),
    new Empleado("Adam", "Pérez", "Director", 5700),
    new Empleado("Yaz", "Guarnizo", "Jefa", 4300),
    new Empleado("Sofía", "López", "Administrativa", 4000),
  ]

  agregarEmpleado(){
    let miEmpleado=new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario)
    this.empleados.push(miEmpleado)
    this.cuadroNombre="",
    this.cuadroApellido="",
    this.cuadroCargo="",
    this.cuadroSalario=0

  }

  arrayCaracteristicas = [''];

  agregarCaracteristica(nuevaCaracteristica: string) {
    this.arrayCaracteristicas.push(nuevaCaracteristica);
  }

  cuadroNombre:string=""
  cuadroApellido:string=""
  cuadroCargo:string=""
  cuadroSalario:number=0
  

  constructor() { 
    
    
  }

  ngOnInit(): void {
  }

}
