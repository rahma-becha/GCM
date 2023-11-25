import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { data } from 'jquery';
import { Patient } from 'src/Model/Patient';
import { PatientService } from 'src/services/patient.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent {
   patient:Patient=new Patient()
   constructor(private patientService:PatientService,private router:Router){}
   submit(){
    this.patientService.addPatient(this.patient).subscribe((data)=>{
      this.router.navigate(["/patients"]);
    }) 
   }
}
