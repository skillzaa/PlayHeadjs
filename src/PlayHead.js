/**The app can have 2 states wrt time. One is running state and other paused. both cases are to be dealt with seperately. during running the time is calculated by the difference between time now ans start time. on the other hand during pause the time is placed in side oldTime and can be managed from there. when resumend this old time is subtracted from the startTime (this oldTime is the time which the animation has run before resume to we need to add that).
 * similarly for forward and rewind also we have to treat both states seperately.
*/
export default class PlayHead {
    constructor() {
        this.duration = 100000;
        this.oldTime = 0;
        this.paused = true;
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
        if (this.paused === true) { //cant be repeated w/o stop
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
