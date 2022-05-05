import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import {
  trigger,
  transition,
  query,
  stagger,
  animate,
  style,
} from '@angular/animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [
    trigger('contactAnimation', [
      transition('void => *', [
        query(
          '.wrapper',
          style({ opacity: 0, transform: 'translateX(-40px)' })
        ),
        query(
          '.wrapper',
          stagger('300ms', [
            animate(
              '500ms 1s ease-out',
              style({ opacity: 1, transform: 'translateX(0)' })
            ),
          ])
        ),
      ]),
    ]),
  ],
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
          'TOKEN_EMAIL',
          'TOKEN_TEMPLATE',
          e.target as HTMLFormElement,
          'TOKEN_PUBLIC'
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
