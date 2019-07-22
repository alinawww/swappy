import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomesComponent } from './homes/homes.component';
import { HouseDetailsComponent } from './house-details/house-details.component';
import { HouseEditComponent } from './house-edit/house-edit.component';
import { ProfileComponent } from './profile/profile.component';

// TODO
// Add route with id to keep and share link
const routes: Routes = [
  { path: '', redirectTo: '/homes', pathMatch: 'full'},
  { path: 'homes', component: HomesComponent },
  { path: 'details/:id', component: HouseDetailsComponent },
  { path: 'add-house', component: HouseEditComponent },
  { path: 'update-house/:id', component: HouseEditComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '**', component: HomesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
