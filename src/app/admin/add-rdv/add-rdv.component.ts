import { Component } from '@angular/core';
import { Patient } from 'src/Model/Patient';
import { Rendezvous } from 'src/Model/rendezvous';
import { PatientService } from 'src/services/patient.service';
import { Router } from '@angular/router';
import { RendezvousService } from 'src/services/rendrezvous.service';

@Component({
  selector: 'app-add-rdv',
  templateUrl: './add-rdv.component.html',
  styleUrls: ['./add-rdv.component.css']
})
export class AddRDVComponent {
  items: Patient[] = [];
  filteredItems: Patient[] = [];
  statuts: string[] = ["Une consultation de contrôle", "Un renouvellement d'ordonnance", "Un suivi d'une maladie chronique","Un bilan de santé","Un vaccin"];
  

  nom:String="";
  prenom:String=""
  rdv:Rendezvous=new Rendezvous()
  constructor(private patientService: PatientService,private rdvService:RendezvousService,private router:Router){}

  ngOnInit() {
    this.patientService.getPatients().subscribe(
      data => {
        this.items = data;
      },
      error => {
        console.error('Error fetching patient data:', error);
      }
    );
  }

  filterItems() {
    // Filter patients based on the search term
    this.filteredItems = this.items.filter(item =>
      item.nom?.toLowerCase().includes(this.nom.toLowerCase()) &&
      item.prenom?.toLowerCase().includes(this.prenom.toLowerCase())
    );
  }
  submit(){
    this.rdvService.addRendezvous(this.rdv).subscribe((data)=>{
      this.router.navigate(["/admin/rendez-vous"])
    })
   }
  
}
