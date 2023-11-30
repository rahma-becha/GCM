import { Component,OnInit } from '@angular/core';
import { Alergie } from 'src/Model/Alergie';
import { DossierMedical } from 'src/Model/DossierMedical';
import { Patient } from 'src/Model/Patient';
import { Traitement } from 'src/Model/Traitement';
import { AlergieService } from 'src/services/alergie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from 'src/services/patient.service';
import { DossierMedicalService } from 'src/services/dossier-medicale.service';
@Component({
  selector: 'app-dossier-medicale',
  templateUrl: './dossier-medicale.component.html',
  styleUrls: ['./dossier-medicale.component.css']
})
export class DossierMedicaleComponent implements OnInit  {
  titre:String="";
  treatement:Traitement=new Traitement()
  dossierMedical:DossierMedical=new DossierMedical()
  patient:Patient=new Patient();
  medicament:String="";
  titreAnalyse:String="";
  taille:String="";
  poid:String="";
  alergies: Alergie[] = [];
  selectedAlergies: string[] = [];
  autre:boolean=false
  autreAllergies=""
  id:number=0;
  dm:DossierMedical[]=[]
submit() {
throw new Error('Method not implemented.');
}
  selectedFile: File | undefined;

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

 

  constructor(private alergieService: AlergieService,private activatedRouter:ActivatedRoute,private patientService:PatientService,private dossierMedicalService:DossierMedicalService) {
    this.id=this.activatedRouter.snapshot.params['id']

  }

  ngOnInit() {
    this.getAllergies()
    this.getPatient()
    this.getDossierMedical()
    this.dm.forEach((item:DossierMedical)=>{
      if(item.patient.id==this.id){
        this.dossierMedical=item
      }
    })
  //  this.dossierMedical != this.dm.find(item => item.patient.id == this.id);
    
  }

  onCheckboxChange(alergie: Alergie) {
    // Ajoute ou supprime la valeur sélectionnée du tableau selectedAlergies
    if (this.selectedAlergies.includes(alergie.nomAlergie)) {
      this.selectedAlergies = this.selectedAlergies.filter((item) => item !== alergie.nomAlergie);
    } else {
      this.selectedAlergies.push(alergie.nomAlergie);
    }
  }
  getAllergies(){
    this.alergieService.getAlergies().subscribe((data) => {
      this.alergies = data;
    });
  }

  getPatient(){
      this.patientService.getPatientById(this.id).subscribe((data)=>{
         this.patient=data
      })
      
  }

  getDossierMedical() {
    this.dossierMedicalService.getDossiersMedicaux().subscribe((data) => {
     // this.dm = data;
     
      this.dossierMedical!=data.find((item=>{item.patient.id==this.id}))
      // Utilisation de find pour récupérer le dossier médical correspondant à l'id du patient
  
      // Affichage du dossier médical trouvé dans la console
    });

  }
}
