import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Niveau} from "../../models/Niveau";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NiveauService {

  constructor(private _http: HttpClient) { }


addNiveau(n:Niveau):Observable<Niveau>{
  return this._http.post<Niveau>("http://localhost:8081/Elearning/niveau",n);
}

update(n:Niveau){
  return this._http.put<Niveau>("http://localhost:8081/Elearning/niveau",n);
}

removeNiveau(id:number){
  return this._http.delete<Niveau>("http://localhost:8081/Elearning/niveau/"+id);
}
FindbyId(id:number):Observable<Niveau>{
  return this._http.get<Niveau>("http://localhost:8081/Elearning/niveau/"+id);
}
FindAllNiveaus():Observable<Niveau[]>{
  return this._http.get<Niveau[]>("http://localhost:8081/Elearning/niveau");
}
}
