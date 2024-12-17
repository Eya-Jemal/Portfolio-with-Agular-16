import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  onSubmit() {
    alert('Merci pour votre message. Je vous répondrai rapidement.');
  }

  ngOnInit() {}

}
