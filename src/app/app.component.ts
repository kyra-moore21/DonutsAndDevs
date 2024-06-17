import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DonutComponent } from './componets/donut/donut.component';
import { InventorComponent } from './components/inventor/inventor.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DonutComponent, InventorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DonutsAndDevs';
}
