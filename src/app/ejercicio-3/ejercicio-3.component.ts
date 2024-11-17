import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejercicio-3',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ejercicio-3.component.html',
  styleUrl: './ejercicio-3.component.css'
})
export class Ejercicio3Component {

  dniFinal=""
  formDni={
    anio:null,
  }

  calcularDNI(){
    let anioDNI = Number(this.formDni.anio)
    let anioactual = 2024 - anioDNI
    var diagnostico=""

    if(anioactual>17){
      diagnostico="DEBE REGISTRAR DNI"
    }
    else{
      diagnostico="AUN NO DEBE REGISTRAR DNI"
    }
    this.dniFinal = `${diagnostico}`
  }
}
