import { Component,OnInit } from '@angular/core';
import { Patient } from 'src/Model/Patient';
import { PatientService } from 'src/services/patient.service';

@Component({
  selector: 'app-list-patients',
  templateUrl: './list-patients.component.html',
  styleUrls: ['./list-patients.component.css']
})
export class ListPatientsComponent implements OnInit {
  patients:Patient[]=[]  
  constructor(private patientService:PatientService){

   }
   ngOnInit(): void {
     this.patientService.getPatients().subscribe((data)=>{
      this.patients=data
     })
   }
}
