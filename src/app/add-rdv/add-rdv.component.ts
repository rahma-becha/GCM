import { Component } from '@angular/core';
import { Patient } from 'src/Model/Patient';
import { PatientService } from 'src/services/patient.service';

@Component({
  selector: 'app-add-rdv',
  templateUrl: './add-rdv.component.html',
  styleUrls: ['./add-rdv.component.css']
})
export class AddRDVComponent {
  items: Patient[] = [];
  searchTerm: string = '';
  selectedPatient: Patient | undefined;
  filteredItems: Patient[] = [];
  selectedDate: string = '';
  constructor(private patientService: PatientService) {}

  ngOnInit() {
    this.patientService.getPatients().subscribe(
      data => {
        this.items = data;
        this.filteredItems = this.items;
      },
      error => {
        console.error('Error fetching patient data:', error);
      }
    );
  }

  filterItems() {
    // Filter patients based on the search term
    this.filteredItems = this.items.filter(item =>
      item.nom?.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      item.prenom?.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
