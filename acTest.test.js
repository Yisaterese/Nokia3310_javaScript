let AirConditioner = require("./AirConditioner.js")
console.log(AirConditioner)

test('check if air conditioner is off', () => {
  const myAC = new AirConditioner();
  expect(myAC.isPowerOff()).toBe(false); 
});


test('check if A.C is off turn On', () => {
  const myAC = new AirConditioner();
  myAC.isPowerOff(); 
  expect(myAC.toggle()).toBe(true);
});

test('increase temperature', () => {
  const myAC = new AirConditioner();
  myAC.isPowerOff(); 
  myAC.toggle()
  myAC.increaseTemperature()
  expect(myAC.getTemperature()).toBe(17); 
});

test('increase temperature above 30_temperature is 30', () => {
  const myAC = new AirConditioner();
  myAC.isPowerOff(); 
  myAC.toggle()
  myAC.increaseTemperature()
  expect(myAC.getTemperature()).toBe(17); 
 
  function increment(num){
    for(let i = 17; i <= num; i++){
      myAC.increaseTemperature()
    }
  }
  increment(14)
  expect(myAC.getTemperature()).toBe(30)
});



test('decrease temperature', () => {
  const myAC = new AirConditioner();
  myAC.isPowerOff(); 
  myAC.toggle()
  myAC.increaseTemperature()
  expect(myAC.getTemperature()).toBe(17);
  myAC.decreaseTemperature()
  expect(myAC.getTemperature()).toBe(16);
});


test('decrease temperature below 16_temperature is 16', () => {
  const myAC = new AirConditioner();
  myAC.isPowerOff(); 
  myAC.toggle()
  myAC.increaseTemperature()
  expect(myAC.getTemperature()).toBe(17);
  myAC.decreaseTemperature()
  expect(myAC.getTemperature()).toBe(16);
  myAC.decreaseTemperature()
  expect(myAC.getTemperature()).toBe(16);

});



