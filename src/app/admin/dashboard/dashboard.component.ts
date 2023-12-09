import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/Model/Patient';
import { Rendezvous } from 'src/Model/rendezvous';
import { PatientService } from 'src/services/patient.service';
import { RendezvousService } from 'src/services/rendrezvous.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  patient :Patient[]=[];
  nombrePatients: number = 0;
  rendezvous: Rendezvous[] = [];
  nombreRendezVousEnAttente: number = 0;
  dateAujourdhui: Date = new Date(); 
  
  constructor(private patientService: PatientService,private rendezvousService:RendezvousService) {}
    ngOnInit(): void {
      this.nombrePtaient();
      this.calculNbRDV();
    }

    nombrePtaient(){
      this.patientService.getPatients().subscribe(patients => {
        this.patient = patients;
      this.nombrePatients=this.patient.length;
      });
    }
    /*calculateNombreRendezVousEnAttente(): void {
      const rendezvousEnAttente = this.rendezvous.filter(
        rendezvous => rendezvous.status == "En attente d'arrivée"
      );
      this.nombreRendezVousEnAttente = rendezvousEnAttente.length;
    }*/
    calculNbRDV(){
      this.rendezvousService.getRendezvous().subscribe(rendezvous => {
        this.rendezvous = rendezvous;
        this.calculateNombreRendezVousEnAttente();
      });
    }
    calculateNombreRendezVousEnAttente(): void {
      this.nombreRendezVousEnAttente = 0; 
      for (const rendezvous of this.rendezvous) {
        if (rendezvous.status === "En attente d'arrivée") {
          this.nombreRendezVousEnAttente++;
        }
      }
    }
        
}
