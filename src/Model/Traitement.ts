import { DossierMedical } from "./DossierMedical";
import { AnalyseTraitement } from "./AnalyseTraitement";
import { MedicamentTraitement } from "./MedicamentTraitement";
export class Traitement {
    titre!:string
    date!: Date;
    durre!:string;
    medicamentTrairements:MedicamentTraitement[]=[]
    analyseTraitements:AnalyseTraitement[]=[];
    dossierMedicale!:DossierMedical
  }