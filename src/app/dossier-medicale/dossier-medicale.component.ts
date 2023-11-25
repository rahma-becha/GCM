import { Component } from '@angular/core';

@Component({
  selector: 'app-dossier-medicale',
  templateUrl: './dossier-medicale.component.html',
  styleUrls: ['./dossier-medicale.component.css']
})
export class DossierMedicaleComponent {
  selectedFile: File | undefined;

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }
}
