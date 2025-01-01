import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FormComponent } from './components/form/form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, FormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'conference-ticket-generator';
}
