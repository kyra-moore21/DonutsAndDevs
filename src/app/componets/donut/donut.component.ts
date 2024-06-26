import { Component } from '@angular/core';
import { DonutService } from '../../services/donut.service';
import { DonutModel } from '../../models/donut-model';
import { DonutItemComponent } from '../donut-item/donut-item.component';

@Component({
  selector: 'app-donut',
  standalone: true,
  imports: [DonutItemComponent],
  templateUrl: './donut.component.html',
  styleUrl: './donut.component.css'
})
export class DonutComponent {
constructor(private _donutService:DonutService){}

donutResult: DonutModel = {} as DonutModel;

ngOnInit(){
  this.callApi();
}
callApi():void{
  this._donutService.getDonuts().subscribe((response:DonutModel) => {
    console.log(response);
    this.donutResult = response;
  })
}
}
