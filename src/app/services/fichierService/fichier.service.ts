import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Exercice} from "../../models/Exercice";
import {Observable} from "rxjs";
import {Fichier} from "../../models/Fichier";

@Injectable({
  providedIn: 'root'
})
export class FichierService {

  constructor(private _http: HttpClient) { }

  AddEventFiles(id:number, file:FormData){
    return this._http.post<Fichier>("http://localhost:8081/exercice/"+id, file,{ observe: 'response' });
  }
}
