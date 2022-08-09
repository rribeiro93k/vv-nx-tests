import { Component } from '@angular/core';

@Component({
  selector: 'vv-nx-tests-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  projectName = 'VV-NX-UNIT-TESTS';
  toggleSidebar = false;

  openSidebar(isOpen: boolean): void {
    this.toggleSidebar = isOpen;
  }
}
