import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import {FormsModule} from "@angular/forms";
import {ClientComponent} from "./client/client.component";

import {HttpClientModule} from "@angular/common/http";
import { HotelComponent } from './hotel/hotel.component';
import { ResaComponent } from './resa/resa.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    ClientComponent,
    HotelComponent,
    ResaComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
