import { Component, OnInit } from '@angular/core';
import { FibonacciService } from './fibonacci.service';

@Component({
  selector: 'fibonacci',
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.scss']
})
export class FibonacciComponent implements OnInit {

  results?: number[];

  constructor(
    private service: FibonacciService
  ) { }

  ngOnInit(): void {
    this.results = this.service.getSequence(1, 21);
  }
}
