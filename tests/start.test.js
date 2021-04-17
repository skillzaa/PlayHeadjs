const Ph = require("../src/PlayHead");

const ph = new Ph();
ph.play();


test('3', () => {
    expect(3).toBe(3);
  });

test('ok', () => {
  const runningTime = ph.runningTime();
    expect(runningTime).toBeGreaterThan(0);
  });