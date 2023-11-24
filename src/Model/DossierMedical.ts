import { Traitement } from "./Traitement";

export class DossierMedical {
    id!: number;
    patientId!: number;
    poids!: number;
    taille!: number;
    allergie!: boolean;
    allergieDetails?: string[];
    traitements?: Traitement[];
  }
  
  
  