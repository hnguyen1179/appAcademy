class Clock {
  constructor (){
    this.date = new Date();

    this.hours = this.date.getHours();
    this.minutes = this.date.getMinutes();
    this.seconds = this.date.getSeconds();

    setInterval(this._tick.bind(this), 1000);
  }
  
  printTime() {
   console.log(`${this.hours} : ${this.minutes} : sec ${this.seconds}`);
  }

  _tick(){
    this.seconds++;
    if (this.seconds === 60) { 
      this.seconds = 0;
      this.minutes++;
    }

    if (this.minutes === 60) { 
      this.minutes = 0;
      this.hours++;
    }

    if (this.hours === 24) {
      this.hours = 0;
    }

    this.printTime();
  }
}
