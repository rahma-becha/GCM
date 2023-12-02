import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/Model/Patient';
import { User } from 'src/Model/User';
import { PatientService } from 'src/services/patient.service';

@Component({
  selector: 'app-list-patients',
  templateUrl: './list-patients.component.html',
  styleUrls: ['./list-patients.component.css']
})
export class ListPatientsComponent implements OnInit {
  patients: Patient[] = []
  localS:string|null=localStorage.getItem("currentUser")
  currentUser!:User 

  constructor(private patientService: PatientService) {

  }
  ngOnInit(): void {
    this.getAllPatients()
    this.getCurrentUser()
  }
  getAllPatients() {
    this.patientService.getPatients().subscribe((data) => {
      this.patients = data
    })
  }
  deletePatient(id: number | undefined) {
    if (confirm("Vous êtes sure de supprimer cette patient")) {
      if (id != undefined) {
        this.patientService.deletePatient(id).subscribe(data => {
          this.getAllPatients()
        }
        )
      }

    }

  }

  getCurrentUser(){
    if(this.localS!=null){
      this.currentUser=JSON.parse(this.localS)

    }
  }
}
