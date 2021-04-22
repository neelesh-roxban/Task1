
import { _decorator, Component, Node, Label, CCLoader, math } from 'cc';
import { EDITOR } from 'cc/env';
import { Blink } from './Blink';
const { ccclass, property } = _decorator;


@ccclass('Timer')
export class Timer extends Component 
{

    @property
    timerAmount:number=5; 

   // @property({type:Blink})
   // clock = null;
    @property({type:Blink})
    clock:Blink = new Blink;

    @property({type:Label})
    label: Label= new Label;
    @property
    isTimerCompletet:boolean=false;
    
 
 
 update(deltaTime: number)
 {
   
   this.timer(deltaTime);
   
   this.timerBlnker();

 }

 timer(deltaTime: number)
 {  
   if(this.isTimerCompletet==false)
   {
 
    this.timerAmount=this.timerAmount-deltaTime;  
    this.label.string= Math.floor( this.timerAmount).toString();
    if( Math.floor( this.timerAmount)==0)
    {
        this.isTimerCompletet=true;
    }
   }

 }

 timerBlnker()
 {
     if(Math.floor( this.timerAmount)==6)
     { 
      
        this.clock.clockBlinker();
     }
     else return;
 }

 reset()
 {
     this.timerAmount=20;
     this.isTimerCompletet=false;
     this.clock.stopBlinking();
 }

}

