** PlayHead

PlayHead is a simple stop watch object that can be used where we need to keep track of time as well as we need to pause, forward, rewind and stop.
It returns the current running time using a public method.
playHead.runningTime();

Good new is that this object has no dependincies.

Following is the API

- To start the counting
playHead.play();   
- To pause the counting
playHead.pause();   
- To re start the counting
playHead.stop();   
- To forward the counter
playHead.forward(milliSeconds);   
- To rewind the counter
playHead.rewind(milliSeconds);  

and finally at any time we can check for the lapsed time
- To check the current running time
playHead.runningTime(milliSeconds); 

-- Further Notes:
-   It has 2 optional variables that we can give to it while creating the object
    - Duration: the length of the time to be counted (in minutes). However at the end of this time the counter will not stop. This may be implemented in future.
    - paused: It decides if the object should start paused or not.
* Both of the above variables have not yet been implemented.    
