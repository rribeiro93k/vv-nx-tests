import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './header.component';

describe('Header', () => {

  let fixture: ComponentFixture<HeaderComponent>;
  let component: HeaderComponent;
  let nativeElement: HTMLElement;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [
        CommonModule,
        MatIconModule,
        MatButtonModule,
        MatToolbarModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    nativeElement = fixture.nativeElement;
  });

  it('Header: Componente deve ser criado', () => {
    expect(component).toBeTruthy();
  });

  it('Header: Emitindo valor booleano igual a true', () => {
    jest.spyOn(component.openSidebarEmitter, 'emit');
    nativeElement.querySelector('button')?.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(component.openSidebarEmitter.emit).toHaveBeenCalledWith(true);
  });

  it('Header: Devo conter o título referente a aplicação', () => {
    fixture.detectChanges();
    const textContent = nativeElement.querySelector('mat-toolbar > span')?.textContent;
    expect(textContent).toContain('VV-NX-UNIT-TESTS');
  });
});
