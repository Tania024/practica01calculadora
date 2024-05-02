import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {
  historial: string[] = [];

  constructor() { }

  agregarOperacion(operacion: string) {
    this.historial.push(operacion);
  }

  limpiarHistorial() {
    this.historial = [];
  }

  obtenerHistorial(): string[] {
    return this.historial;
  }

}
