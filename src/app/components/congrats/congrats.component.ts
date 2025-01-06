import { Component, input } from '@angular/core';

@Component({
  selector: 'app-congrats',
  standalone: true,
  imports: [],
  templateUrl: './congrats.component.html',
  styleUrl: './congrats.component.scss',
})
export class CongratsComponent {
  name = input<string>();
  email = input<string>();
}
