import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Output()
  openSidebarEmitter = new EventEmitter<boolean>();

  private toggleSidebar = false;

  openSidebar(): void {
    this.toggleSidebar = !this.toggleSidebar;
    this.openSidebarEmitter.emit(this.toggleSidebar);
  }
}
