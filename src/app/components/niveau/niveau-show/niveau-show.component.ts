import { Component, OnInit } from '@angular/core';
import {NiveauService} from "../../../services/niveauService/niveau.service";
import {Router} from "@angular/router";
import {Niveau} from "../../../models/Niveau";

@Component({
  selector: 'app-niveau-show',
  templateUrl: './niveau-show.component.html',
  styleUrls: ['./niveau-show.component.scss']
})
export class NiveauShowComponent implements OnInit {
  ELEMENT_DATA:Niveau[]=[];


  constructor(private ns:NiveauService,private _router:Router) { }


  ngOnInit(): void {
    this.ns.FindAllNiveaus().subscribe(res=>
    {this.ELEMENT_DATA=res;
      console.log(this.ELEMENT_DATA);


    });


  }


  deleteNiveau(id:number) {
    this.ns.removeNiveau(id).subscribe(res=>console.log("level deleted"));
    window.location.reload();

  }
}
