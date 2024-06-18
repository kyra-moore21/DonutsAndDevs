import { Component } from '@angular/core';
import { InventorService } from '../../services/inventor.service';
import { InventorModel } from '../../models/inventor-model';

@Component({
  selector: 'app-inventor',
  standalone: true,
  imports: [],
  templateUrl: './inventor.component.html',
  styleUrl: './inventor.component.css'
})
export class InventorComponent {

  constructor(private _inventorService:InventorService){}

  inventorResult: InventorModel = {} as InventorModel;

  ngOnInit(){
    this._inventorService.getInventors().subscribe((response: InventorModel) => {
      console.log(response);
      this.inventorResult = response;
  })
}

 

}
