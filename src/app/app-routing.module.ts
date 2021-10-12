import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ClientComponent} from "./client/client.component";
import {HotelComponent} from "./hotel/hotel.component";
import {ResaComponent} from "./resa/resa.component";
import {LoginComponent} from "./login/login.component";
import {AuthentificationGuard} from "./authentification.guard";

const routes: Routes = [
  {path : 'client', component: ClientComponent, canActivate : [AuthentificationGuard]},
  {path : 'hotel', component:HotelComponent,canActivate : [AuthentificationGuard]},
  {path : 'resa', component : ResaComponent,canActivate : [AuthentificationGuard]},
  {path : 'login', component : LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
