import { Traitement } from "./Traitement";

export class Medicament{
    id!:number
    medicament!:string
    nbrFois!:number;
    trairements!:Traitement[]
}