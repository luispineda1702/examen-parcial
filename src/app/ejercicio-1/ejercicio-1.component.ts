import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejercicio-1',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ejercicio-1.component.html',
  styleUrl: './ejercicio-1.component.css'
})
export class Ejercicio1Component {

  resultado=""
  formPrecio={
    precio:null,
    cantidad:null,
  }

  calcularDescuento(){
    let precioTotal = Number(this.formPrecio.precio)*Number(this.formPrecio.cantidad);
    var precioFinal=null;

    if(precioTotal>199){
      precioFinal = precioTotal * 0.8
    }
    else{
      precioFinal=precioTotal
    }
    this.resultado = `El precio final es ${precioFinal}`
  }
}
