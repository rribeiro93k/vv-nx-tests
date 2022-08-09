import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'vv-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input()
  projectName!: string;

  @Output()
  openSidebarEmitter = new EventEmitter<boolean>();

  private toggleSidebar = false;

  openSidebar(): void {
    this.toggleSidebar = !this.toggleSidebar;
    this.openSidebarEmitter.emit(this.toggleSidebar);
  }
}
