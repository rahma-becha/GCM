import { Component } from '@angular/core';
import { Patient } from 'src/Model/Patient';
import { Rendezvous } from 'src/Model/rendezvous';
import { PatientService } from 'src/services/patient.service';

@Component({
  selector: 'app-add-rdv',
  templateUrl: './add-rdv.component.html',
  styleUrls: ['./add-rdv.component.css']
})
export class AddRDVComponent {
  items: Patient[] = [];
  filteredItems: Patient[] = [];

  selectedDate: string = '';
  statuts: string[] = ["En attente d'arrivée", "En cours", "Clôture"];
  selectedStatut: string = '';

  nom:String="";
  prenom:String=""
  rdv:Rendezvous=new Rendezvous()

  constructor(private patientService: PatientService) {}

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
    console.log(this.filteredItems)
  }
  submit(){
    console.log();
   }
}
