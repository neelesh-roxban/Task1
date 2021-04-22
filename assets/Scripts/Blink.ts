
import { _decorator, Component, Node,Animation } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Blink')
export class Blink extends Component 


{
@property({type:Animation})
ani: Animation= new Animation;


  public  clockBlinker()
    {
      this.ani.play();
      
      console.log("blink");
      
    }
    public stopBlinking()
    {

        this.ani.stop();
    }

}



    
