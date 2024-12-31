import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction'; 
import dayGridPlugin from '@fullcalendar/daygrid'; 



@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    editable: true,
    selectable: true,
    events: [],
    plugins: [interactionPlugin, dayGridPlugin], 
    dateClick: this.handleDateClick.bind(this), 
  };

  handleDateClick(arg: any): void {
    alert(`Date cliquée : ${arg.dateStr}`);
  }

  addTask(): void {
    alert('Ajouter une tâche est en cours de développement !');
  }

}
