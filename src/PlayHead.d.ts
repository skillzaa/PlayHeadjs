/**This Object can have 2 states wrt time. One is running state and other paused. both cases are to be dealt with seperately. during running state the time is calculated by the difference between time now and a start time variable. on the other hand during pause state the time is placed inside oldTime variable and can be managed from there. when resumed this oldtime is subtracted from the startTime (this oldTime is the time which the animation has already run previously thus to resume  we need to subtract it). similarly while forward and rewind also we have to treat running states and paused state seperately.
*/
declare class PlayHead {
    private duration;
    private oldTime;
    private paused;
    private startTime;
    /**Duration has to be in seconds */
    constructor(duration?: number, paused?: boolean);
    runningTime(): number;
    play(): void;
    pause(): void;
    stop(): void;
    resume(): void;
    forward(ms?: number): void;
    rewind(ms?: number): void;
}
