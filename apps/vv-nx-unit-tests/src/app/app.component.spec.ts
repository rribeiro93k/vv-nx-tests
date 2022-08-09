import { APP_BASE_HREF } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterModule } from './footer/footer.modules';
import { HeaderModule } from './header/header.module';
import { SidebarModule } from './sidebar/sidebar.module';

describe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatSidenavModule,
        AppRoutingModule,
        HeaderModule,
        SidebarModule,
        FooterModule
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  });

  it('AppComponent: Criação do componente', () => {
    expect(app).toBeTruthy();
  });

  it('AppComponent: Valor referente a propriedade toggleSidebar deve iniciar com false', () => {
    expect(app.toggleSidebar).toBeFalsy();
  });

  it('AppComponent: Valor referente a propriedade toggleSidebar deve ser alterado para true', () => {
    app.openSidebar(true);
    expect(app.toggleSidebar).toBeTruthy();
  });
});
