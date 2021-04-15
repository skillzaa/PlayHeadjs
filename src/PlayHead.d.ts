/**The app can have 2 states wrt time. One is running state and other paused. both cases are to be dealt with seperately. during running the time is calculated by the difference between time now ans start time. on the other hand during pause the time is placed in side oldTime and can be managed from there. when resumend this old time is subtracted from the startTime (this oldTime is the time which the animation has run before resume to we need to add that).
 * similarly for forward and rewind also we have to treat both states seperately.
*/
export default class PlayHead {
    runningTime(): number;
    play(): void;
    pause(): void;
    stop(): void;
    resume(): void;
    forward(ms?: number): void;
    rewind(ms?: number): void;
}
