import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio-4',
  standalone: true,
  imports: [],
  templateUrl: './ejercicio-4.component.html',
  styleUrl: './ejercicio-4.component.css'
})
export class Ejercicio4Component {

  pares: number[] = []; 
  mostrarPares() { 
    this.pares = []; 
    for (let i = 20; i >= 10; i--) { 
      if (i % 2 === 0) { 
        this.pares.push(i); 
      } 
    } 
  }
}