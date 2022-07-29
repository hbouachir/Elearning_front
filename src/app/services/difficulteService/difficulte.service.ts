import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Difficulte} from "../../models/Difficulte";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DifficulteService {

  constructor(private _http:HttpClient) { }



  addDifficulte(d:Difficulte):Observable<Difficulte>{
    return this._http.post<Difficulte>("http://localhost:8081/Elearning/difficulte",d);
  }

  update(d:Difficulte){
    return this._http.put<Difficulte>("http://localhost:8081/Elearning/difficulte",d);
  }

  removeDifficulte(id:number){
    return this._http.delete<Difficulte>("http://localhost:8081/Elearning/difficulte/"+id);
  }
  FindbyId(id:number):Observable<Difficulte>{
    return this._http.get<Difficulte>("http://localhost:8081/Elearning/difficulte/"+id);
  }
  FindAllDifficultes():Observable<Difficulte[]>{
    return this._http.get<Difficulte[]>("http://localhost:8081/Elearning/difficulte");
  }
}
