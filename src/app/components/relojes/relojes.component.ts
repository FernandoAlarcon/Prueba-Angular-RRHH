import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
@Component({
  selector: 'app-relojes',
  templateUrl: './relojes.component.html',
  styleUrls: ['./relojes.component.css']
})
export class RelojesComponent implements OnInit {
  
  now            : Date | undefined;
  timeLeft       : number = 0;
  minutsLeft     : number = 0;
  interval       : any | undefined;
  TempoInterval  : any | undefined;
  subscribeTimer : number | undefined;
  minuts         : number = 0;
  ContMinuts     : number = 0;
  ContSecond     : number = 60;

  TempoMinuts    : number = 0;
  TempoSeconds   : number = 0;
  
  PlayCrono      : boolean = false; 
  TempoCrono     : boolean = true; 

  statusCrono    : boolean = false; 
  statusTempo    : boolean = false;

  showCrono      : boolean = false; 

  constructor() { }
 
  ngOnInit() {
 
    this.now = new Date(); 
    setInterval(() => { 
      this.now = new Date();
    }, 1000); /// END setInterval
 
  }/// FINAL ngOnInit

  oberserableTimer() {
    const source = timer(1000, 2000);
    const abc = source.subscribe(val => {
      console.log(val, '-');
      this.subscribeTimer = this.timeLeft - val;
    });
  }

  startTimer(): void {

    this.showCrono   = true;
    this.PlayCrono   = false;
    this.statusCrono = true;

    this.interval = setInterval(() => {

      if(this.timeLeft > 0) {
        this.timeLeft--;
      }else if(this.timeLeft == 0 && this.minutsLeft == 0 ) {
        

        clearInterval(this.interval);
        this.statusCrono = false;
        this.PlayCrono   = true;
        this.minutsLeft  = this.minuts;
        this.minutsLeft--;
        this.timeLeft   = 59;
      
      } else {
        
        this.minutsLeft--;
        this.timeLeft = 59;
        
        if( this.minutsLeft < 0 ){
          
          this.minutsLeft = 0;
          this.timeLeft   = 0;
          clearInterval(this.interval);
          
        }
      }
    },1000)

  }

  startTimerTempo(): void {

    this.TempoCrono  = false;
    this.statusTempo = true;

    this.TempoInterval = setInterval(() => {

      this.TempoSeconds++;
      if(this.TempoSeconds > 59) {
        this.TempoMinuts++;
        this.TempoSeconds = 0;
      } 

    },1000)

  }
  
  pauseTimerTempo() {
            
    this.TempoCrono  = true;
    this.statusTempo = false;
    clearInterval(this.TempoInterval);
  }

  pauseTimer() {
           
    this.PlayCrono   = true
    this.statusCrono = false
    
    clearInterval(this.interval);
  }

  MinutsChangue(){

    this.showCrono = false;
    if( this.minuts < 0 ){
        
      this.minuts = 0;      
      this.PlayCrono = false;

    }else if( this.minuts == 0 ) {

      this.PlayCrono = false;

    }else if( this.minuts > 0 ){
      
      this.minutsLeft = this.minuts;
      this.minutsLeft--;
      this.timeLeft   = 59;
      this.PlayCrono  = true;
    
    }

  }


}
