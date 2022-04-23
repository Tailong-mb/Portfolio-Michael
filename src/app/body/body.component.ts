import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
})
export class BodyComponent {
  @Input() collapsed = false;
  @Input() screenWidth = 0;

  getBodyClass(): String {
    let styleClasss = ``;
    if (this.collapsed && this.screenWidth > 768) {
      styleClasss = 'body-trimmed';
    } else if (
      this.collapsed &&
      this.screenWidth <= 768 &&
      this.screenWidth > 0
    ) {
      styleClasss = 'body-md-screen';
    }
    return styleClasss;
  }
}
