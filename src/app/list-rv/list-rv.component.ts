import { Component,OnInit } from '@angular/core';
import { data } from 'jquery';
import { Rendezvous } from 'src/Model/rendezvous';
import { RendezvousService } from 'src/services/rendrezvous.service';

@Component({
  selector: 'app-list-rv',
  templateUrl: './list-rv.component.html',
  styleUrls: ['./list-rv.component.css']
})
export class ListRVComponent implements OnInit {
  rendezvousList:Rendezvous[]=[]
  statuts: string[] = ["En attente d'arrivée", "En cours", "Clôture","Annulé"];

  constructor(private rendezvousService:RendezvousService){

  }  
  ngOnInit(): void {
    this.getAllRDVs()
    }
    getAllRDVs(){
      this.rendezvousService.getRendezvous().subscribe((data)=>{
        this.rendezvousList=data
      })
    }

    deleteRDV(rdv:Rendezvous) {
      if (confirm("Vous êtes sure d'annulé cette patient")) {
          rdv.status="Annulé"
          this.rendezvousService.updateRendezvous(rdv).subscribe(data => {
            this.getAllRDVs()
          }
          )
        
  
      }
  
    }
    setColutre(rdv:Rendezvous){
      rdv.status="Clôture"
      this.rendezvousService.updateRendezvous(rdv).subscribe(data => {
        this.getAllRDVs()
      }
      )
    }
  setEnCours(rdv:Rendezvous){
    rdv.status="En cours"
          this.rendezvousService.updateRendezvous(rdv).subscribe(data => {
            this.getAllRDVs()
          }
          )
  }
}
