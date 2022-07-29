import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SousChamp} from "../../models/SousChamp";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SousChampService {

  constructor(private _http:HttpClient) { }

  addSousChamp(s:SousChamp):Observable<SousChamp>{
    return this._http.post<SousChamp>("http://localhost:8081/Elearning/sousChamp",s);
  }

  update(s:SousChamp){
    return this._http.put<SousChamp>("http://localhost:8081/Elearning/sousChamp",s);
  }

  removeSousChamp(id:number){
    return this._http.delete<SousChamp>("http://localhost:8081/Elearning/sousChamp/"+id);
  }
  FindbyId(id:number):Observable<SousChamp>{
    return this._http.get<SousChamp>("http://localhost:8081/Elearning/sousChamp/"+id);
  }
  FindAllSousChamps():Observable<SousChamp[]>{
    return this._http.get<SousChamp[]>("http://localhost:8081/elearning/sousChamp");
  }
  FindSousChampByChamp(id:number):Observable<SousChamp[]>{
    return this._http.get<SousChamp[]>("http://localhost:8081/Elearning/sousChamps/"+id);
  }
}
