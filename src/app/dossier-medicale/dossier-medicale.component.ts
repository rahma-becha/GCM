import { Component } from '@angular/core';
import { Alergie } from 'src/Model/Alergie';
import { AlergieService } from 'src/services/alergie.service';

@Component({
  selector: 'app-dossier-medicale',
  templateUrl: './dossier-medicale.component.html',
  styleUrls: ['./dossier-medicale.component.css']
})
export class DossierMedicaleComponent  {
  titre:String="";
  medicament:String="";
  titreAnalyse:String="";
  taille:String="";
  poid:String="";
  alergies: Alergie[] = [];
  selectedAlergies: string[] = [];
submit() {
throw new Error('Method not implemented.');
}
  selectedFile: File | undefined;

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

 

  constructor(private alergieService: AlergieService) {}

  ngOnInit() {
    this.alergieService.getAlergies().subscribe((data) => {
      this.alergies = data;
    });
  }

  onCheckboxChange(alergie: Alergie) {
    // Ajoute ou supprime la valeur sélectionnée du tableau selectedAlergies
    if (this.selectedAlergies.includes(alergie.nomAlergie)) {
      this.selectedAlergies = this.selectedAlergies.filter((item) => item !== alergie.nomAlergie);
    } else {
      this.selectedAlergies.push(alergie.nomAlergie);
    }
  }
}
