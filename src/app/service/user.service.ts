import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {httpOptions} from "../variables";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }

  authenticate(u : any){
    return this.http.post<any>(environment.apiUrl + "login", u, httpOptions )
  }
}
