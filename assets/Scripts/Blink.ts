
import { _decorator, Component, Node,Animation, Sprite, Color } from 'cc';
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
        var sprit =this.node.getComponent(Sprite);
        sprit.color=new Color(255,255,255);
        this.ani.stop();
    }

}



    
