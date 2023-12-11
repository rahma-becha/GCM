import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from 'src/Model/Patient';
import { PatientService } from 'src/services/patient.service';

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.css']
})
export class EditPatientComponent implements OnInit {
  patient:Patient=new Patient()
  id:number=0
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
      this.router.navigate(["/admin/patients"]);
    }) 
  }
}
