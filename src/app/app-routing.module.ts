import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomesComponent } from './homes/homes.component';
import { HouseComponent } from './house/house.component';

const routes: Routes = [
  { path: 'homes', component: HomesComponent },
  { path: 'details', component: HouseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
