import { Component,OnInit } from '@angular/core';
import { data } from 'jquery';
import { Rendezvous } from 'src/Model/rendezvous';
import { RendezvousService } from 'src/services/rendrezvous.service';

@Component({
  selector: 'app-list-rv',
  templateUrl: './list-rv.component.html',
  styleUrls: ['./list-rv.component.css']
})
export class ListRVComponent implements OnInit {
  rendezvousList:Rendezvous[]=[]
  constructor(private rendezvousService:RendezvousService){

  }  
  ngOnInit(): void {
      this.rendezvousService.getRendezvous().subscribe((data)=>{
        this.rendezvousList=data
      })
    }
}
