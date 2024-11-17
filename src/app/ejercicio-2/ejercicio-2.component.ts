import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejercicio-2',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ejercicio-2.component.html',
  styleUrl: './ejercicio-2.component.css'
})
export class Ejercicio2Component {
  
  simulacion = ""
  formPrest={
    prest:""
  }

  calcularPrestamo(){
    var cuotas = null
    var valorCuota = null
    var interes = null
    var interesFinal = null
    

    let prestamo = Number(this.formPrest.prest)
    if(prestamo<=4000){
      interesFinal = prestamo * 0.12
      if(prestamo>5000){
        cuotas=3
        valorCuota=interesFinal/cuotas
      }
      else if(prestamo<1000){
        cuotas=1
        valorCuota=interesFinal/cuotas
      }
      else if (prestamo >= 2000 && prestamo <= 3000) { 
        cuotas = 2;
        valorCuota = interesFinal / cuotas;
      }
      else{
        cuotas=5
        valorCuota=interesFinal/cuotas
      }
    }
    else{
      interesFinal = prestamo * 0.1
      if(prestamo>5000){
        cuotas=3
        valorCuota=interesFinal/cuotas
      }
      else if(prestamo<1000){
        cuotas=1
        valorCuota=interesFinal/cuotas
      }
      else if (prestamo >= 2000 && prestamo <= 3000) { 
        cuotas = 2;
        valorCuota = interesFinal / cuotas;
      }
      else{
        cuotas=5
        valorCuota=interesFinal/cuotas
      }
    }
    this.simulacion = `El total de cuotas a pagar es ${cuotas} y su valor es ${valorCuota}`
  }
}
