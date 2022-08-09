import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatChipsModule } from '@angular/material/chips';
import { FibonacciComponent } from './fibonacci.component';
import { FibonacciService } from './fibonacci.service';

describe('Fibonacci', () => {

  const sequenceFibonacci = [1, 2, 3, 5, 8, 13, 21];
  let service: FibonacciService;
  let fixture: ComponentFixture<FibonacciComponent>;
  let component: FibonacciComponent;
  let nativeElement: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FibonacciComponent],
      imports: [
        CommonModule,
        MatChipsModule
      ],
      providers: [FibonacciService]
    }).compileComponents();

    service = TestBed.inject(FibonacciService);
    fixture = TestBed.createComponent(FibonacciComponent);
    component = fixture.componentInstance;
    nativeElement = fixture.nativeElement;
  });

  it('Fibonacci: Componente deve ser criado', () => {
    expect(component).toBeTruthy();
  });

  it('Fibonacci: Devo retornar uma lista com a sequência Fibonacci até o número 21', () => {
    const listNumbers = service.getSequence(1, 21);
    expect(listNumbers).toEqual(expect.arrayContaining(sequenceFibonacci));
  });

});
