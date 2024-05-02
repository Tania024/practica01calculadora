import { Component } from '@angular/core';
import { CalculadoraService } from '../../services/calculadora.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.scss'
})
export class CalculadoraComponent {
  displayValue: string = '';
  historialVisible: boolean = false;

  constructor(private calculadoraService: CalculadoraService) { }

  ngOnInit(): void {
    this.drawNumbers();
    this.drawOperators();
  }

  drawNumbers() {
    const numbersContainer = document.querySelector<HTMLElement>('.button-container');
    if (numbersContainer) {
      for (let i = 0; i <= 9; i++) {
        const button = document.createElement('button');
        button.textContent = i.toString();
        button.classList.add('calculator-button', 'orange');
        button.addEventListener('click', () => this.appendToDisplay(i.toString()));
        numbersContainer.appendChild(button);
      }
    }
  }

  drawOperators() {
    const operatorsContainer = document.querySelector<HTMLElement>('.button-container');
    if (operatorsContainer) {
      const operators: string[] = ['+', '-', '*', '/', '=', 'C', 'Borrar'];
      operators.forEach(operator => {
        const button = document.createElement('button');
        button.textContent = operator;
        button.classList.add('calculator-button', 'green');
        button.addEventListener('click', () => {
          if (operator === '=') {
            this.Resultado();
          } else if (operator === 'C') {
            this.clearDisplay();
          } else if (operator === 'Borrar') {
            this.eliminar();
          } else {
            this.addToDisplay(operator);
          }
        });
        operatorsContainer.appendChild(button);
      });
    }
  }

  appendToDisplay(digit: string) {
    this.displayValue += digit;
    this.updateDisplay();
  }

  addToDisplay(operator: string) {
    this.displayValue += operator;
    this.updateDisplay();
  }

  Resultado() {
    try {
      const operacion = this.displayValue + '=';
      const resultado = eval(this.displayValue);
      const operacionCompleta = `${this.displayValue} = ${resultado}`; // Formato: operacion = resultado
      this.displayValue = resultado.toString();
      this.calculadoraService.agregarOperacion(operacionCompleta);
      this.updateDisplay();
    } catch (error) {
      this.displayValue = 'Error';
      this.updateDisplay();
    }
    }

  clearDisplay() {
    this.displayValue = '';
    this.updateDisplay();
  }

  eliminar() {
    this.displayValue = this.displayValue.slice(0, -1);
    this.updateDisplay();
  }

  updateDisplay() {
    const inputElement = document.querySelector<HTMLInputElement>('.custom-input');
    if (inputElement) {
      inputElement.value = this.displayValue;
    }
  }


  // Método para mostrar el historial
  mostrarHistorial() {
    this.historialVisible = true;
  }

  // Método para limpiar el historial
  limpiarHistorial() {
    this.calculadoraService.limpiarHistorial();
  }

  // Método para obtener el historial del servicio
  get historial(): string[] {
    return this.calculadoraService.obtenerHistorial();
  }


}
