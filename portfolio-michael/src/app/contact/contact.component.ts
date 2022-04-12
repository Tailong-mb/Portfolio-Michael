import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  name: string = '';
  email: string = '';
  message: string = '';

  constructor() {}

  ngOnInit(): void {}

  submitForm() {
    if (
      this.email
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ) &&
      (this.message === '' || this.message === undefined)
    ) {
      const message = `My name is ${this.name}.\nMy email is ${this.email}.\nMy message is ${this.message}`;
      alert('Message envoye !');
    } else {
      alert('Message vide ou email invalide');
    }
  }
}
