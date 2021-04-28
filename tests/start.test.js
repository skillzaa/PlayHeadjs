const Ph = require("../dist/index");
const log = console.log;
const ph = new Ph();
ph.play();

test('runningTime > 0 ', () => {
  const runningTime = ph.runningTime();
  //log(runningTime);
    expect(runningTime).toBeGreaterThan(0);
  });

ph.pause();
const runningTime1 = ph.runningTime();

test('runningTime is same after pause', () => {
setTimeout(()=>{
  //log(runningTime2)
  let runningTime2 = ph.runningTime();
  expect(runningTime1).toEqual(runningTime2);
},1000);
});

ph.play();

test('runningTime > 0 : Just to make sure that runningTime runs on play ', () => {
  setTimeout(()=>{
    //log(runningTime2)
    runningTime3 = ph.runningTime();
    expect(runningTime3).toBeGreaterThan(runningTime1);
  },1000);
});

test('runningTime > 0 : Just to make sure that runningTime runs on play ', () => {
ph.stop();
expect(ph.runningTime()).toEqual(0);
});

test('pause and then check', () => {
ph.play();
setTimeout(()=>{
  ph.pause();
  expect(ph.runningTime()).toBeGreaterThan(0);
},1000);

});

test('pause and then forwards', () => {
  const rt = ph.runningTime();
  ph.forward();
  expect(ph.runningTime()).toEqual(rt+5000);
});

test('check forward again', () => {
  const p = new Ph();
  p.play();
  p.pause();
const runTime = p.runningTime();
p.forward(3000);
const runTime2 = p.runningTime();
expect(runTime2).toBeGreaterThan(runTime+2999);


});
test('check rewind again', () => {
  const p = new Ph();
  p.play();
  setTimeout(()=>{
    p.pause();
  const runTime = p.runningTime();
  p.forward(3000);
  const runTime2 = p.runningTime();
  expect(runTime2).toBeGreaterThan(runTime+2999);

  },500);  
  

});


  