import { Component,Input,Output,EventEmitter } from '@angular/core';
import { Rendezvous } from 'src/Model/rendezvous';

@Component({
  selector: 'app-rdv',
  templateUrl: './rdv.component.html',
  styleUrls: ['./rdv.component.css']
})
export class RdvComponent {
    @Input() rdv!:Rendezvous
    @Output() rdvChangeStatusEmitter=new EventEmitter<Rendezvous>()
    @Output() rdvAnuulerEmitter=new EventEmitter<Rendezvous>()

    statuts: string[] = ["En attente d'arrivée", "En cours", "Clôture","Annulé"];
    
    changeStatusrdv(){
      this.rdvChangeStatusEmitter.emit(this.rdv)
    }

    deleteRDV(){
      this.rdvAnuulerEmitter.emit(this.rdv)
    }
}
