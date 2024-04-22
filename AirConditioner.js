

class AirConditioner {
  constructor() {
    this.isOn = false; 
    this.temperature = 16;
  }
  isPowerOff() {
      return this.isOn;
  }
  toggle() {
    return this.isOn = !this.isOn;
  }

  getTemperature(){
    return this.temperature
  }

  increaseTemperature(){
    if(this.temperature >= 16 || this.temperature <= 30){
      this.temperature++;
    }
  }

  decreaseTemperature(){
    if(this.temperature >= 16 || this.temperature <= 30){
      this.temperature--;
    }
    throw new Error("can't reduce AC less than 16")

  }





}

module.exports = AirConditioner;
