import { Component } from '@angular/core';
import { Patient } from 'src/Model/Patient';
import { Rendezvous } from 'src/Model/rendezvous';
import { PatientService } from 'src/services/patient.service';
import { RendezvousService } from 'src/services/rendrezvous.service';
import { ActivatedRoute, Router } from '@angular/router';
import { data } from 'jquery';
import Swal from "sweetalert2"
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-edit-rdv',
  templateUrl: './edit-rdv.component.html',
  styleUrls: ['./edit-rdv.component.css']
})
export class EditRDVComponent {
  statuts: string[] = ["Une consultation de contrôle", "Un renouvellement d'ordonnance", "Un suivi d'une maladie chronique","Un bilan de santé","Un vaccin"];
  rdv:Rendezvous=new Rendezvous()
  id:number=0
  datepipe: DatePipe = new DatePipe('en-US')
  errorDate="";
  date:Date=new Date();
  constructor(private activatedRouter:ActivatedRoute,private router:Router,private rdvService:RendezvousService) {
    this.id=this.activatedRouter.snapshot.params['id']

  }

  ngOnInit() {
 
    this.getRDV()
  
  }

 
  submit(){
    this.rdvService.updateRendezvous(this.rdv).subscribe((data)=>{
      Swal.fire("Success", "modification est effectuée avec succes", "success")

      this.router.navigate(["/admin/rendez-vous"])
    },(error)=>{
      Swal.fire("Error", "une erreur est survenue", "error")

    })
   }
   getRDV(){
    this.rdvService.getRendezvousById(this.id).subscribe((data)=>{
      this.rdv=data;
      
    })
   }

   getChecked(patient:Patient){
    return patient.id==this.rdv.patient.id
   }
   validateDate(){
    let dateTranformed=this.datepipe.transform(this.date,"YYYY-MM-dd")
    if(dateTranformed!=null && this.rdv.date<dateTranformed){
     this.errorDate="Date de Naissance est invalide";
    }
    else
    {
      this.errorDate=""

    }
 }
}
