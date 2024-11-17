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
  formPrest={
    prest:""
  }

  calcularPrestamo(){
    var cuotas:null
    var valorCuota:null
    var interes:null
    var interesFinal:null

    let prestamo = Number(this.formPrest.prest)

  }
}
