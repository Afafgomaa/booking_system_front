import { Component, OnInit } from '@angular/core';
import { EventService } from './../../shared/event.service';



export class event{
  name:string;
  description:string;
  from_date:Date;
  to_date:Date;
  id:number;

}

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
 events:event;
 popup:boolean;
  constructor(private getevents:EventService) { 
    this.getevents.showEvents().subscribe((data:any) => {
      this.events = data;
      
    })
      this.popup = false;
    
  }
  show(){
   alert("event booked successfully")
  }

  ngOnInit() {
  }


}
