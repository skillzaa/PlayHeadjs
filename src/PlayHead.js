"use strict";
/**This Object can have 2 states wrt time. One is running state and other paused. both cases are to be dealt with seperately. during running state the time is calculated by the difference between time now and a start time variable. on the other hand during pause state the time is placed inside oldTime variable and can be managed from there. when resumed this oldtime is subtracted from the startTime (this oldTime is the time which the animation has already run previously thus to resume  we need to subtract it). similarly while forward and rewind also we have to treat running states and paused state seperately.
*/
// export default class PlayHead {
class PlayHead {
    constructor(duration = 100000, paused = true) {
        this.duration = duration;
        this.oldTime = 0;
        this.paused = paused;
        this.startTime = 0;
    }
    runningTime() {
        if (this.paused === false) {
            const t = (Date.now() - this.startTime);
            return Number((t / 1000).toFixed(2));
        }
        else {
            return this.oldTime / 1000;
        }
    }
    play() {
        if (this.paused === true) { //pause cant be repeated w/o stop
            this.startTime = (Date.now() - this.oldTime);
            this.oldTime = 0;
            this.paused = false;
        }
    }
    pause() {
        if (this.paused === false) { // so playinh now will pause
            this.oldTime = Date.now() - this.startTime; //store time
            this.startTime = 0;
            this.paused = true;
        }
    }
    stop() {
        this.oldTime = 0; //since its start so old time is gone
        this.startTime = 0;
        this.paused = true;
    }
    resume() {
        this.play();
    }
    forward(ms = 5000) {
        let oldPause = false;
        if (this.paused === true) {
            oldPause = true;
        }
        this.pause();
        if (this.oldTime + ms < this.duration) {
            this.oldTime = this.oldTime + ms;
        }
        if (oldPause == false) {
            this.play();
        }
    }
    rewind(ms = 5000) {
        let oldPause = false;
        if (this.paused === true) {
            oldPause = true;
        }
        this.pause();
        if (this.oldTime - ms > 0) {
            this.oldTime = this.oldTime - ms;
        }
        if (oldPause == false) {
            this.play();
        }
    }
}
module.exports = PlayHead;
