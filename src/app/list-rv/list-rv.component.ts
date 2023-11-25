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
  statuts: string[] = ["En attente d'arrivée", "En cours", "Clôture"];

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

    deleteRDV(id: number | undefined) {
      if (confirm("Vous êtes sure de supprimer cette patient")) {
        if (id != undefined) {
          this.rendezvousService.deleteRendezvous(id).subscribe(data => {
            this.getAllRDVs()
          }
          )
        }
  
      }
  
    }
}
