import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fibonacci',
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.scss']
})
export class FibonacciComponent implements OnInit {

  resultados?: number[];

  ngOnInit(): void {
    this.resultados = this.obterSequenciaFibonacci(1, 100);
  }

  private obterSequenciaFibonacci(fatorNumeral = 1, repeticao = 20): number[] {

    let valorAnterior = 0;
    let resultado = fatorNumeral;
    let resultados = new Array<number>();

    for (let limitador = 1; limitador < repeticao; limitador++) {
      resultado = resultado + valorAnterior;
      valorAnterior = resultado - valorAnterior;
      resultados.push(resultado);
    }
    return resultados;
  }
}