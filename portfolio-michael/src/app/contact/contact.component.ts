import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  firstName: string = '';
  secondName: string = '';
  email: string = '';
  message: string = '';
  subject: string = '';

  constructor() {}

  ngOnInit(): void {}

  emptyAttribute(): boolean {
    return (
      this.firstName === '' ||
      this.secondName === '' ||
      this.email === '' ||
      this.message === '' ||
      this.subject === ''
    );
  }

  submitForm(e: Event) {
    if (this.emptyAttribute()) {
      alert('Un champ est vide');
    } else if (
      !this.email
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
      alert('email invalide');
    } else {
      e.preventDefault();
      emailjs
        .sendForm(
          'gmail',
          'template_n9gc8fu',
          e.target as HTMLFormElement,
          'BDOAawa1d11U5R8NT'
        )
        .then(
          (result: EmailJSResponseStatus) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      alert('Message envoyé !');
    }

    this.firstName = '';
    this.secondName = '';
    this.email = '';
    this.message = '';
    this.subject = '';
  }
}
