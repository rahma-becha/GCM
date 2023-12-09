import { Component, OnInit } from '@angular/core';
import { ViewChild } from "@angular/core";
import { Rendezvous } from 'src/Model/rendezvous';
import { RendezvousService } from 'src/services/rendrezvous.service';
import { DatePipe } from '@angular/common';




@Component({
  selector: 'app-week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.css']
})
export class WeekComponent implements OnInit {
	datepipe: DatePipe = new DatePipe('en-US')
	dateAujourdhui: Date = new Date(); 
	first = this.dateAujourdhui.getDate() - this.dateAujourdhui.getDay(); 
	last = this.first + 6; 
   dateDebutSemaine:Date=new Date(this.dateAujourdhui.setDate(this.first+1))
   dateFinSemaine:Date=new Date(this.dateAujourdhui.setDate(this.last));
   
   rendezvous:Rendezvous[]=[]
   redenzVousParJour = new Array<number>(0,0,0,0,0,0);
   chartOptions = {};
   constructor(private rendezvousService:RendezvousService){
	
   }
   getAllRendezVous(){
	this.rendezvousService.getRendezvous().subscribe(rendezvous => {
        this.rendezvous = rendezvous;
		this.getCurrentRendezVous()
      });
   }
   getCurrentRendezVous(){
	let debutSemaine=this.datepipe.transform(this.dateDebutSemaine,"YYYY-MM-dd");
	let finSemaine=this.datepipe.transform(this.dateFinSemaine,"YYYY-MM-dd");
    if (debutSemaine!= null && finSemaine!=null) {
		for (const rendezvous of this.rendezvous) {
			if (rendezvous.date>=debutSemaine && rendezvous.date<=finSemaine) {
			  let rdvDay=new Date(rendezvous.date).getDay()
			    for(let i=0;i<6;i++){
					if(rdvDay==i+1){
						this.redenzVousParJour[i]=this.redenzVousParJour[i]+1
					}
				}
				
			}
		  }
		  this.chartOptions={
			title: {
				text: "Taux de Rendez-vous par semaine"
			},
			data: [{
			  type: "column",
			  dataPoints: [
			  { label: "Lundi",  y: this.redenzVousParJour[0]  },
			  { label: "Mardi", y: this.redenzVousParJour[1]  },
			  { label: "Mercredi", y: this.redenzVousParJour[2]  },
			  { label: "Jeudi",  y: this.redenzVousParJour[3]  },
			  { label: "Vendredi",  y: this.redenzVousParJour[4]  },
			 { label: "Samedi",  y: this.redenzVousParJour[5]  }
			  ]
			}] 
		}
	
	}
	
   }
   ngOnInit(): void {
	this.getAllRendezVous()
   }
  

 

}






