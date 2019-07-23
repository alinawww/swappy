import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomesComponent } from './homes/homes.component';
import { HouseComponent } from './house/house.component';
import { HttpClientModule } from '@angular/common/http';
import { HouseDetailsComponent } from './house-details/house-details.component';
// import { RouterScroller } from '@angular/router/src/router_scroller';
import { HouseEditComponent } from './house-edit/house-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { ProfileComponent } from './profile/profile.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { AvailabilityCalendarComponent } from './availability-calendar/availability-calendar.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomesComponent,
    HouseComponent,
    HouseDetailsComponent,
    HouseEditComponent,
    ProfileComponent,
    AvailabilityCalendarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CoreModule,
    SharedModule,
    CarouselModule.forRoot(),
    BsDatepickerModule.forRoot()
  ],
  providers: [],
  entryComponents: [LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
