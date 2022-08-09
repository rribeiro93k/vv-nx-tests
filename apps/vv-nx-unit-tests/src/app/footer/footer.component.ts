import { Component, Input } from '@angular/core';

@Component({
  selector: 'vv-footer',
  templateUrl: 'footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  @Input()
  projectName!: string;

  version = '1.0.0';
}
