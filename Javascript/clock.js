class Clock {
  constructor() {
    // 1. Create a Date object.
    // 2. Store the hours, minutes, and seconds.
    // 3. Call printTime.
    // 4. Schedule the tick at 1 second intervals.
    this.date = new Date();
    this.hours = this.date.getHours();
    this.mins = this.date.getMinutes();
    this.secs = this.date.getSeconds();
    this.printTime();
    setInterval(() => this._tick(), 1000);
    // setInterval(this._tick().bind(this), 1000);
  }

  printTime() {
    // Format the time in HH:MM:SS
    // Use console.log to print it.
    let current_time = `${this.hours}:${this.mins}:${this.secs}`;
    console.log(current_time);
  }

  _tick() {
    // 1. Increment the time by one second.
    // 2. Call printTime.
    this.secs++;
    if (this.secs == 60){
      this.secs = 0;
      this.mins++;
      if (this.mins == 60){
        this.mins = 0;
        this.hours++;
        if (this.hours == 24){
          this.hours = 0;
        }
      }
    }
    this.printTime();
  }
}

const clock = new Clock();
