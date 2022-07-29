import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Niveau} from "../../../models/Niveau";
import {NiveauService} from "../../../services/niveauService/niveau.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-niveau-add',
  templateUrl: './niveau-add.component.html',
  styleUrls: ['./niveau-add.component.scss']
})
export class NiveauAddComponent implements OnInit {
  n:Niveau=new Niveau();
  constructor( private _router: Router,private ns:NiveauService) { }

  ngOnInit() {

  }

  // convenience getter for easy access to form fields
  onClickSubmit(result) {
    console.log("You have entered : " + result.niveau);
    this.n.titre=result.niveau;
    this.ns.addNiveau(this.n).subscribe(res=>console.log(this.n,"added with sucess"));
    this._router.navigateByUrl('niveau/show');


  }
}
