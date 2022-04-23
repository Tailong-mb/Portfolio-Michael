import { Component } from '@angular/core';
import { informationContact, informationComplement } from './data-cv';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss'],
})
export class CvComponent {
  dataContact = informationContact;
  dataComplement = informationComplement;
}
