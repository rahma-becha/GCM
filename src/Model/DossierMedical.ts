import { Alergie } from "./Alergie";
import { Patient } from "./Patient";
import { Traitement } from "./Traitement";

export class DossierMedical {
    id!: number;
    patient!: Patient;
    poids!: number;
    taille!: number;
    allergie!: boolean;
    prixPaye!:number;
    prixRestant!:number;
    allergieDetails!: Alergie[];
    traitements!: Traitement[];
  }
  
  
  