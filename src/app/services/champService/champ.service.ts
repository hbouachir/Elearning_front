import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Champ} from "../../models/Champ";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ChampService {

  constructor(private _http:HttpClient) { }


  addChamp(c:Champ):Observable<Champ>{
    return this._http.post<Champ>("http://localhost:8081/Elearning/champ",c);
  }

  update(c:Champ){
    return this._http.put<Champ>("http://localhost:8081/Elearning/champ",c);
  }

  removeChamp(id:number){
    return this._http.delete<Champ>("http://localhost:8081/Elearning/champ/"+id);
  }
  FindbyId(id:number):Observable<Champ>{
    return this._http.get<Champ>("http://localhost:8081/Elearning/champ/"+id);
  }
  FindAllChamps():Observable<Champ[]>{
    return this._http.get<Champ[]>("http://localhost:8081/Elearning/champ");
  }
}
