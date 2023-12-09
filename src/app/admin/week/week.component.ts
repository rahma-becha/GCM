import { Component } from '@angular/core';
import { ViewChild } from "@angular/core";




@Component({
  selector: 'app-week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.css']
})
export class WeekComponent {
  chartOptions = {
	  title: {
		  text: "Taux de Rendez-vous par semaine"
	  },
	  data: [{
		type: "column",
		dataPoints: [
		{ label: "Lundi",  y: 10  },
		{ label: "Mardi", y: 15  },
		{ label: "Mercredi", y: 25  },
		{ label: "Jeudi",  y: 30  },
		{ label: "Vendredi",  y: 28  },
    { label: "Samedi",  y: 28  }
		]
	  }]                
    };

}






