import { Injectable } from '@angular/core';
import {Trimestre} from "../../models/Trimestre";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TrimestreService {

  constructor(private _http:HttpClient) { }

  addTrimestre(t:Trimestre):Observable<Trimestre>{
    return this._http.post<Trimestre>("http://localhost:8081/Elearning/trimestre",t);
  }

  update(t:Trimestre){
    return this._http.put<Trimestre>("http://localhost:8081/Elearning/trimestre",t);
  }

  removeTrimestre(id:number){
    return this._http.delete<Trimestre>("http://localhost:8081/Elearning/trimestre/"+id);
  }
  FindbyId(id:number):Observable<Trimestre>{
    return this._http.get<Trimestre>("http://localhost:8081/Elearning/trimestre/"+id);
  }
  FindAllTrimestres():Observable<Trimestre[]>{
    return this._http.get<Trimestre[]>("http://localhost:8081/Elearning/trimestre");
  }
}
