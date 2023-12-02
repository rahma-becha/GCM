import { MedicamentTraitement } from "./MedicamentTraitement";
import { Traitement } from "./Traitement";

export class Medicament{
    id!:number
    medicament!:string
    medicamentTrairements!:MedicamentTraitement[]
}