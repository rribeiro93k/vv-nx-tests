import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './footer.component';

describe('Footer', () => {

  let fixture: ComponentFixture<FooterComponent>;
  let component: FooterComponent;
  let nativeElement: HTMLElement;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [FooterComponent],
      imports: [
        CommonModule,
        MatIconModule,
        MatButtonModule,
        MatToolbarModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    nativeElement = fixture.nativeElement;
  });

  it('Footer: Componente deve ser criado', () => {
    expect(component).toBeTruthy();
  });

  it('Footer: Devo conter o nome referente ao projeto', () => {
    component.projectName = 'VV-NX-UNIT-TESTS';
    fixture.detectChanges();
    const textContent = nativeElement.querySelector('footer > p')?.textContent;
    expect(textContent).toContain('VV-NX-UNIT-TESTS');
  });
});
