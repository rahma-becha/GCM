import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { data } from 'jquery';
import { DossierMedical } from 'src/Model/DossierMedical';
import { Patient } from 'src/Model/Patient';
import { DossierMedicalService } from 'src/services/dossier-medicale.service';
import { PatientService } from 'src/services/patient.service';
import Swal from "sweetalert2"
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent {
  patient: Patient = new Patient()
  datepipe: DatePipe = new DatePipe('en-US')
  errorDate="";
  date:Date=new Date();
  constructor(private patientService: PatientService, private router: Router, private dossierMedicalService: DossierMedicalService) { }
  submit() {
    this.patientService.addPatient(this.patient).subscribe((data) => {
      this.addDossier(data)
    })
  }

  addDossier(patient: Patient) {
    let dossierMedical: DossierMedical = new DossierMedical()
    dossierMedical.patient = patient
    this.dossierMedicalService.addDossierMedical(dossierMedical).subscribe(data => {
      Swal.fire("Success", "Ajout est effectuée avec succes", "success")
      this.router.navigate(["/admin/patients"]);
    }, (error) => {
      Swal.fire("Error", "une erreur est survenue", "error")
    })
  }

  validateDate(){
     let dateTranformed=this.datepipe.transform(this.date,"YYYY-MM-dd")
     if(dateTranformed!=null && this.patient.dateNaissance>=dateTranformed){
      this.errorDate="Date de Naissance est invalide";
     }
     else
     {
      this.errorDate=""

     }
  }
}
