import { Component, Input, input } from '@angular/core';
import { Complete } from '../../models/inventor-model';

@Component({
  selector: 'tr[famous-row]',
  standalone: true,
  imports: [],
  templateUrl: './inventor-row.component.html',
  styleUrl: './inventor-row.component.css'
})
export class InventorRowComponent {
@Input() DisplayDev:Complete = {} as Complete;


}
