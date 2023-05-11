import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public contactInfo = {
    title: "Nehmen Sie Kontakt mit uns auf",
    subtitle: "Wir freuen uns über Ihre Kontaktaufnahme zu unserem Projekt. Schreiben Sie uns eine E-Mail an :",
    email_address: "rolf.feichtenbeiner@dfki.de"
  };
  constructor() { }

  ngOnInit(): void {
  }

}
