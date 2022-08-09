import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FibonacciService {

  getSequence(numeralFactor = 1, limit = 21): number[] {

    let previousValue = 0;
    let result = numeralFactor;
    let results = new Array<number>();

    while (result <= limit) {
      result = result + previousValue;
      previousValue = result - previousValue;

      if (result <= limit) {
        results.push(result);
      }
    }
    return results;
  }
}
