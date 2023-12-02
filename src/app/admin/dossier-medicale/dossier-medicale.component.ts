import { Component,OnInit } from '@angular/core';
import { Alergie } from 'src/Model/Alergie';
import { DossierMedical } from 'src/Model/DossierMedical';
import { Patient } from 'src/Model/Patient';
import { Traitement } from 'src/Model/Traitement';
import { AlergieService } from 'src/services/alergie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from 'src/services/patient.service';
import { DossierMedicalService } from 'src/services/dossier-medicale.service';
import { AnalyseService } from 'src/services/analyse.service';
import { MedicamentService } from 'src/services/medicament.service';
import { Analyse } from 'src/Model/Analyse';
import { Medicament } from 'src/Model/Medicament';
import { MedicamentTraitement } from 'src/Model/MedicamentTraitement';
import { AnalyseTraitement } from 'src/Model/AnalyseTraitement';
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
  selectedAlergies: Alergie[] = [];
  autre:boolean=false
  autreAllergies=""
  id:number=0;
  dm:DossierMedical[]=[]
  analyses:Analyse[]=[]
  medicaments:Medicament[]=[]
  selectedMedicament!:Medicament;
  selectedAnalyse!:Analyse;
  nbrFois!:number
submit() {
throw new Error('Method not implemented.');
}
  selectedFile: File | undefined;

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

 

  constructor(private alergieService: AlergieService,private activatedRouter:ActivatedRoute,private patientService:PatientService,private dossierMedicalService:DossierMedicalService,private analyseService:AnalyseService,private medicamentService:MedicamentService) {
    this.id=this.activatedRouter.snapshot.params['id']

  }

  ngOnInit() {
    this.getAllergies()
    this.getPatient()
    this.getDossierMedical()
   this.getAllAnalyses();
   this.getAllMedicaments()    
  }

  onCheckboxChange(alergie: Alergie) {
    // Ajoute ou supprime la valeur sélectionnée du tableau selectedAlergies
    if (this.selectedAlergies.includes(alergie)) {
      this.selectedAlergies = this.selectedAlergies.filter((item) => item.nomAlergie !== alergie.nomAlergie);
    } else {
      this.selectedAlergies.push(alergie);
    }
    this.dossierMedical.allergieDetails=this.selectedAlergies
    console.log(this.dossierMedical.allergieDetails)
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
     this.dm = data;
      this.getDossierMedicalPatient()
      
    });

  }
  getDossierMedicalPatient(){
      for(const item of this.dm){
        if(item.patient.id==this.id){
          this.dossierMedical=item
        }
      }
  }
  getAllAnalyses(){
    this.analyseService.getAllAnalyses().subscribe((data)=>{
      this.analyses=data
    })
  }

  getAllMedicaments(){
    this.medicamentService.getAllMedicaments().subscribe((data)=>{
      this.medicaments=data
    })
  }
  saveMedicament(){
    let mt=new MedicamentTraitement();
    mt.medicament=this.selectedMedicament;
    mt.nbrFois=this.nbrFois
    this.treatement.medicamentTrairements.push(mt)
    this.selectedMedicament=new Medicament();
    this.nbrFois=0
  }

  saveAnalyse(){
    let analyse=new AnalyseTraitement();
    analyse.analyse=this.selectedAnalyse;
    this.treatement.analyseTraitements.push(analyse)
    this.selectedAnalyse=new Analyse()
  }

  deleteMed(med:MedicamentTraitement){
    this.treatement.medicamentTrairements.splice(this.treatement.medicamentTrairements.indexOf(med),1)
  }
  deleteAnalyse(analyse:AnalyseTraitement){
    this.treatement.analyseTraitements.splice(this.treatement.analyseTraitements.indexOf(analyse),1)
  }
}
