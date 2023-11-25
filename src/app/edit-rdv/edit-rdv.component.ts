import { Component } from '@angular/core';
import { Patient } from 'src/Model/Patient';
import { Rendezvous } from 'src/Model/rendezvous';
import { PatientService } from 'src/services/patient.service';
import { RendezvousService } from 'src/services/rendrezvous.service';
import { ActivatedRoute, Router } from '@angular/router';
import { data } from 'jquery';

@Component({
  selector: 'app-edit-rdv',
  templateUrl: './edit-rdv.component.html',
  styleUrls: ['./edit-rdv.component.css']
})
export class EditRDVComponent {
  items: Patient[] = [];
  filteredItems: Patient[] = [];

  selectedDate: string = '';
  statuts: string[] = ["Une consultation de contrôle", "Un renouvellement d'ordonnance", "Un suivi d'une maladie chronique","Un bilan de santé","Un vaccin"];
  selectedStatut: string = '';

  nom:String="";
  prenom:String=""
  rdv:Rendezvous=new Rendezvous()
  id:number=0
  constructor(private patientService: PatientService,private activatedRouter:ActivatedRoute,private router:Router,private rdvService:RendezvousService) {
    this.id=this.activatedRouter.snapshot.params['id']

  }

  ngOnInit() {
    this.patientService.getPatients().subscribe(
      data => {
        this.items = data;
      },
      error => {
        console.error('Error fetching patient data:', error);
      }
    );
    this.getRDV()
  
  }

  filterItems() {
    // Filter patients based on the search term
    this.filteredItems = this.items.filter(item =>
      item.nom?.toLowerCase().includes(this.nom.toLowerCase()) &&
      item.prenom?.toLowerCase().includes(this.prenom.toLowerCase())
    );
  }
  submit(){
    this.rdvService.updateRendezvous(this.rdv).subscribe((data)=>{
      this.router.navigate(["/rendez-vous"])
    })
   }
   getRDV(){
    this.rdvService.getRendezvousById(this.id).subscribe((data)=>{
      this.rdv=data;
      if (this.rdv.patient.nom!=undefined) {
        this.nom=this.rdv.patient.nom
      }
      if (this.rdv.patient.prenom!=undefined) {
        this.prenom=this.rdv.patient.prenom
      }
      this.filterItems()

    })
   }
}
