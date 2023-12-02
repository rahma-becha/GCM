import { Component } from '@angular/core';
import { Patient } from 'src/Model/Patient';
import { Rendezvous } from 'src/Model/rendezvous';
import { PatientService } from 'src/services/patient.service';
import { RendezvousService } from 'src/services/rendrezvous.service';
import { ActivatedRoute, Router } from '@angular/router';
import { data } from 'jquery';

@Component({
  selector: 'app-edit-rdv',
  templateUrl: './edit-rdv.component.html',
  styleUrls: ['./edit-rdv.component.css']
})
export class EditRDVComponent {
  statuts: string[] = ["Une consultation de contrôle", "Un renouvellement d'ordonnance", "Un suivi d'une maladie chronique","Un bilan de santé","Un vaccin"];
  rdv:Rendezvous=new Rendezvous()
  id:number=0
  constructor(private activatedRouter:ActivatedRoute,private router:Router,private rdvService:RendezvousService) {
    this.id=this.activatedRouter.snapshot.params['id']

  }

  ngOnInit() {
 
    this.getRDV()
  
  }

 
  submit(){
    this.rdvService.updateRendezvous(this.rdv).subscribe((data)=>{
      this.router.navigate(["/rendez-vous"])
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
}
