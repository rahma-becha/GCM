import { DossierMedical } from "./DossierMedical";
import { Rendezvous } from "./rendezvous";

export class Patient {
    id!: number;
    nom!: string;
    prenom!: string;
    dateNaissance!: string;
    genre!: string;
    adresse!: string;
    telephone!: string;
    CNAM!: boolean;
    NumCnam!: number;
    rendezvous!:Rendezvous[]
    dossierMedical!:DossierMedical
  }
  