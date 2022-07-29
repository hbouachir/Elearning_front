import {Niveau} from "./Niveau";
import {Trimestre} from "./Trimestre";
import {Champ} from "./Champ";
import {Chapitre} from "./Chapitre";
import {Difficulte} from "./Difficulte";
import {Fichier} from "./Fichier";

export class Exercice {
  id!: number;
  niveau!:Niveau;
  trimestre!:Trimestre;
  champ!:Champ;
  chapitre!:Chapitre;
  difficulte!:Difficulte;
  numero!:number;
  fichiers!:Fichier[];

}
