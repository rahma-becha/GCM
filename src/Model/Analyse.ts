import { Traitement } from "./Traitement";
export class Analyse{
    id!:number;
    titreAnalyse!:string;   
    file!:File;
    traitements?:Traitement[];
}