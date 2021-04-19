/**This Object can have 2 states wrt time. One is running state and other paused. both cases are to be dealt with seperately. during running state the time is calculated by the difference between time now and a start time variable. on the other hand during pause state the time is placed inside oldTime variable and can be managed from there. when resumed this oldtime is subtracted from the startTime (this oldTime is the time which the animation has already run previously thus to resume  we need to subtract it). similarly while forward and rewind also we have to treat running states and paused state seperately.
*/

// export default class PlayHead {
class PlayHead {
private    duration:number; 
private    oldTime:number;
private    paused:boolean;
private    startTime:number; 

/**Duration has to be in seconds */
constructor(duration = 100,paused=true) {
this.duration = duration * 1000; //convert it into milisecond 
this.oldTime = 0;
this.paused = paused;
this.startTime = 0;  

}   

public runningTime(){  
    if (this.paused === false){
        const t =  (Date.now() - this.startTime);
        return Number((t));
     }else {
        return Number(this.oldTime);
    }
}

public play(){
    if(this.paused === true){//pause cant be repeated w/o stop
        this.startTime = (Date.now() - this.oldTime);//if its first time then oldTime=0
        this.oldTime = 0;
        this.paused = false;
       }       
}
public pause(){
    if(this.paused === false){ // so playing prev and now will pause
        this.oldTime = Date.now() - this.startTime;//store time already ran
        this.startTime = 0; //we need reset since now the old startTime does not matter
        this.paused = true;
       }   
}
public stop(){ 
        this.oldTime = 0; //since its start so old time is gone
        this.startTime = 0;
        this.paused = true;  
}

public resume(){
    this.play();
}

public forward(ms=5000){ 

let oldPause = false; //save the paused status

if(this.paused === true){oldPause = true;}    

this.pause(); // just to make sure that the transaction goes well

    if(this.oldTime + ms < this.duration){
    this.oldTime = this.oldTime + ms;
}  

if (oldPause == false){this.play();}
}

public rewind(ms=5000){// in rwd subtract from startTime
    let oldPause = false;
    if(this.paused === true){oldPause = true;}  
this.pause();
if(this.oldTime - ms > 0){
    this.oldTime = this.oldTime - ms;
}    
if (oldPause == false){this.play();}

}

//////////////////////////classsss-----------------
}
module.exports = PlayHead;