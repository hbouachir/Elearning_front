import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Exercice} from "../../models/Exercice";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ExerciceService {

  constructor(private _http: HttpClient) { }


  addExercice(e:Exercice):Observable<Exercice>{
    return this._http.post<Exercice>("http://localhost:8081/Elearning/exercice",e);
  }

  update(e:Exercice){
    return this._http.put<Exercice>("http://localhost:8081/Elearning/exercice",e);
  }

  removeExercice(id:number){
    return this._http.delete<Exercice>("http://localhost:8081/Elearning/exercice/"+id);
  }
  FindbyId(id:number):Observable<Exercice>{
    return this._http.get<Exercice>("http://localhost:8081/Elearning/exercice/"+id);
  }
  FindAllExercices():Observable<Exercice[]>{
    return this._http.get<Exercice[]>("http://localhost:8081/elearning/Exercice");
  }
}
