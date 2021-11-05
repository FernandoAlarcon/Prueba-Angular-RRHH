import * as moment from 'moment';
import { AfterViewInit, Component, EventEmitter, Output, Renderer2, ViewChild, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';  
//import { MatCalendar } from '@angular/material';


const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3',
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF',
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA',
  },
};

@Component({
  selector: 'app-calendario', 
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})

export class CalendarioComponent implements AfterViewInit  {

  // constructor() { }

  // ngOnInit(): void { 
  // }

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    dateClick: this.handleDateClick.bind(this), // bind is important!
    events: [
      { title: 'evento 1', date: '2021-11-01' },
      { title: 'evento 2', date: '2021-11-02' }
    ]
  };

  handleDateClick( arg : any ) {
    alert('date click! ' + arg.dateStr)
  }

  /////////////////////////////////////////////////////////

  selectedDate = moment();
  minDate: moment.Moment | undefined;
  maxDate: moment.Moment | undefined;

  @Output()
  dateSelected: EventEmitter<moment.Moment> = new EventEmitter();

  @Output()
  monthSelected: EventEmitter<moment.Moment> = new EventEmitter();

  @ViewChild('calendar', { static: true })
  //calendar: MatCalendar<moment.Moment>;
  calendar: any|undefined;

  constructor(private renderer: Renderer2) { }

  setMinDate() {
    this.minDate = moment().add(-10, 'day');
  }

  setMaxDate() {
    this.maxDate = moment().add(10, 'day');
  }

  ngAfterViewInit() {
    const buttons = document.querySelectorAll('.mat-calendar-previous-button, .mat-calendar-next-button');

    if (buttons) {
      Array.from(buttons).forEach(button => {
        this.renderer.listen(button, 'click', () => {
          this.monthSelected.emit(this.calendar.activeDate);
        });
      });
    }
  }

  


}

 


