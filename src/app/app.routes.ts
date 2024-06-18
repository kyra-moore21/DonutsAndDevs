import { Routes } from '@angular/router';
import { DonutComponent } from './componets/donut/donut.component';
import { InventorComponent } from './components/inventor/inventor.component';

export const routes: Routes = [
    {path:"Donuts", component: DonutComponent},
    {path:"Devs", component: InventorComponent},
    {path:"", redirectTo: "/Donuts", pathMatch:"full"},
    {path:"**", redirectTo: "/Donuts", pathMatch: "full"}//put at bottom
];
