import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss'],
})
export class CvComponent {
  @Input() collapsed = false;
  @Input() screenWidth = 0;

  getCvClass(): String {
    let styleClasss = ``;
    if (this.collapsed && this.screenWidth > 768) styleClasss = 'body-trimmed';
    else if (this.collapsed && this.screenWidth <= 768 && this.screenWidth > 0)
      styleClasss = 'body-md-screen';
    return ``;
  }
}
