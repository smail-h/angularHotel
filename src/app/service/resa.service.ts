import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Resa} from "../classes/resa";
import {environment} from "../../environments/environment";
import {httpOptions} from "../variables";
import {Client} from "../classes/client";

@Injectable({
  providedIn: 'root'
})
export class ResaService {

  constructor(private http :HttpClient) { }

  loadResa(search : String):Observable<Resa[]>{
    let searchCondition = "";
    if(search.length > 0){
      searchCondition = "?client="+search;
    }

    return this.http.get<Resa[]>(environment.apiUrl + "resa"+searchCondition, httpOptions);
  }
  addResa( resa : Resa ) : Observable<Resa> {
    return this.http.post<Resa>( environment.apiUrl + "resa" , resa , httpOptions )
  }
  getResa( id? : number ) : Observable<Resa> {
    return this.http.get<Resa>( environment.apiUrl + "resa/"+id , httpOptions )
  }
  editResa(resa : Resa) : Observable<Resa>{
    return this.http.put<Resa>(environment.apiUrl + "resa/"+resa.id, resa, httpOptions)
  }
  deleteResa( id? : number ) : Observable<any> {
    return this.http.delete<Resa>( environment.apiUrl + "resa/"+id , httpOptions )
  }

}
