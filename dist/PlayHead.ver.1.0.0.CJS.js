"use strict";module.exports=class{constructor(t=100,s=!0){this.duration=1e3*t,this.oldTime=0,this.paused=s,this.startTime=0}runningTime(){if(!1===this.paused){const t=Date.now()-this.startTime;return Number(t)}return Number(this.oldTime)}play(){!0===this.paused&&(this.startTime=Date.now()-this.oldTime,this.oldTime=0,this.paused=!1)}pause(){!1===this.paused&&(this.oldTime=Date.now()-this.startTime,this.startTime=0,this.paused=!0)}stop(){this.oldTime=0,this.startTime=0,this.paused=!0}resume(){this.play()}forward(t=5e3){let s=!1;!0===this.paused&&(s=!0),this.pause(),this.oldTime+t<this.duration&&(this.oldTime=this.oldTime+t),0==s&&this.play()}rewind(t=5e3){let s=!1;!0===this.paused&&(s=!0),this.pause(),this.oldTime-t>0&&(this.oldTime=this.oldTime-t),0==s&&this.play()}};