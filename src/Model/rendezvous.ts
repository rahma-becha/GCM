import { Patient } from "./Patient";

export class Rendezvous {
    id!: number;
    patient!: Patient;
    date!: string;
    heure!:string
    motif!: string;
    status:string="En attente d'arrivée"
  }
  