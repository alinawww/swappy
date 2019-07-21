import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomesComponent } from './homes/homes.component';
import { HouseComponent } from './house/house.component';
import { HttpClientModule } from '@angular/common/http';
import { HouseDetailsComponent } from './house-details/house-details.component';
import { RouterScroller } from '@angular/router/src/router_scroller';

@NgModule({
  declarations: [
    AppComponent,
    HomesComponent,
    HouseComponent,
    HouseDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
