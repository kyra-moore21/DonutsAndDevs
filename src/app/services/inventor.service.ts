import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InventorModel } from '../models/inventor-model';

@Injectable({
  providedIn: 'root'
})
export class InventorService {

  constructor(private http:HttpClient) { }

  getInventors():Observable<InventorModel>{
    return this.http.get<InventorModel>(`https://grandcircusco.github.io/demo-apis/computer-science-hall-of-fame.json`)
  }
}
