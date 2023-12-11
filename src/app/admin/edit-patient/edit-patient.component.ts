import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from 'src/Model/Patient';
import { PatientService } from 'src/services/patient.service';
import Swal from "sweetalert2"
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.css']
})
export class EditPatientComponent implements OnInit {
  patient:Patient=new Patient()
  id:number=0
  datepipe: DatePipe = new DatePipe('en-US')
  errorDate="";
  date:Date=new Date();

  constructor(private activatedRouter:ActivatedRoute,private router:Router,private patientService:PatientService){
    this.id=this.activatedRouter.snapshot.params['id']

  }
   ngOnInit(): void {
     this.getPatient()
     this. Cnamchanged()
   }
   getPatient(){
      this.patientService.getPatientById(this.id).subscribe((data)=>{
         this.patient=data
      })
   }
   Cnamchanged(){
if (this.patient.CNAM == false){
  this.patient.NumCnam.toString()!=" "
}
   }
  submit(){
    this.patientService.updatePatient(this.patient).subscribe((data)=>{
      Swal.fire("Success", "modification est effectuée avec succes", "success")

      this.router.navigate(["/admin/patients"]);
    },(error)=>{
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
