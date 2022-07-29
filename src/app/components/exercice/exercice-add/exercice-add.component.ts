import { Component, OnInit } from '@angular/core';
import {Exercice} from "../../../models/Exercice";
import {NiveauService} from "../../../services/niveauService/niveau.service";
import {Router} from "@angular/router";
import {Niveau} from "../../../models/Niveau";
import {TrimestreService} from "../../../services/trimestreService/trimestre.service";
import {Trimestre} from "../../../models/Trimestre";
import {ChampService} from "../../../services/champService/champ.service";
import {SousChampService} from "../../../services/sousChampService/sous-champ.service";
import {Champ} from "../../../models/Champ";
import {SousChamp} from "../../../models/SousChamp";
import {ChapitreService} from "../../../services/chapitreService/chapitre.service";
import {DifficulteService} from "../../../services/difficulteService/difficulte.service";
import {Chapitre} from "../../../models/Chapitre";
import {Difficulte} from "../../../models/Difficulte";

@Component({
  selector: 'app-exercice-add',
  templateUrl: './exercice-add.component.html',
  styleUrls: ['./exercice-add.component.scss']
})
export class ExerciceAddComponent implements OnInit {
 ex:Exercice=new Exercice();
 niveau:Niveau[]=[];
 trimestres:Trimestre[]=[];
  submitted: any;
  opt = [1,2,3,4,5,6,7,8,9,10]
  ngSelect = 1;
   champs: Champ[]=[];
   sousChamp: SousChamp[]=[];
  cacher: boolean=false;
   chapitres: Chapitre[]=[] ;
   difficultes: Difficulte[]=[];
  constructor(
    private ns:NiveauService,
    private ts:TrimestreService,
    private cs:ChampService,
    private ss:SousChampService,
    private chaps:ChapitreService,
    private ds:DifficulteService,
    private _router:Router) { }

  ngOnInit(): void {
    this.cacher=false;
    this.ns.FindAllNiveaus().subscribe(res=>
    {this.niveau=res;
    console.log(this.niveau);
    }

    );
    this.ts.FindAllTrimestres().subscribe(res=>{
      this.trimestres=res;
      console.log("trim",this.trimestres);

    })

    this.cs.FindAllChamps().subscribe(res=>{
      this.champs=res;
      console.log(this.champs)


    })
    this.chaps.FindAllChapitres().subscribe(res=>{
      this.chapitres=res;
      console.log(this.chapitres);

    })
    this.ds.FindAllDifficultes().subscribe(res=>{
      this.difficultes=res;
      console.log(this.difficultes);
    })



  }

  onSubmit() {

    console.log(this.ex)
    }

  SelectChamp($event: Event) {
    console.log(this.ex.champ);
    this.ss.FindSousChampByChamp(this.ex.champ.id).subscribe(res=>
    {this.sousChamp=res;console.log(this.sousChamp);})
    this.cacher=true;

  }
}
