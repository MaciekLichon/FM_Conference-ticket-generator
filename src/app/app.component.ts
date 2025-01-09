import { Component, signal } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FormComponent, TicketValue } from './components/form/form.component';
import { LogoComponent } from './components/logo/logo.component';
import { CongratsComponent } from './components/congrats/congrats.component';
import { TicketComponent } from './components/ticket/ticket.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    FormComponent,
    LogoComponent,
    CongratsComponent,
    TicketComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'conference-ticket-generator';

  formValue = signal<TicketValue | null>(null);

  onFormSubmit(form: TicketValue) {
    console.log(form);
    this.formValue.set(form);
  }
}
