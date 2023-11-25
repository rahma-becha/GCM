import { Component } from '@angular/core';
import { Patient } from 'src/Model/Patient';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent {
   patient:Patient=new Patient()

   submit(){
    console.log(this.patient)
   }
}
