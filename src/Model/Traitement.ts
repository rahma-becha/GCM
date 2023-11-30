import { DossierMedical } from "./DossierMedical";
import { Medicament } from "./Medicament";
import { Analyse } from "./Analyse";
export class Traitement {
    titre!:string
    date!: string;
    durre!:string;
    medicament!: Medicament[] | null;
    analyse!: Analyse[] | null;
    dossierMedicale!:DossierMedical
  }