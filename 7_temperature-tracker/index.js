exports.default = class TempTracker {
  constructor() {
    this.temperatures = {};
    this.entries = 0;
    this.sum = 0;
    this.max = null;
    this.min = null;
    this.mode = null;
    this.modeCount = 0;
  }

  // records a new temperature
  insert(temperature) {
    if (this.temperatures[temperature]) {
      this.temperatures[temperature].occurrences += 1;
    } else {
      this.temperatures[temperature] = { occurrences: 1 };
    }
    if (this.temperatures[temperature].occurrences > this.modeCount) {
      this.modeCount = this.temperatures[temperature].occurrences;
      this.mode = temperature;
    }
    if (this.max === null || temperature > this.max) this.max = temperature;
    if (this.min === null || temperature < this.min) this.min = temperature;
    this.entries += 1;
    this.sum += temperature;
  }

  // returns the highest temp we've seen so far
  getMax() {
    return this.max;
  }

  // returns the lowest temp we've seen so far
  getMin() {
    return this.min;
  }

  // returns the mean of all temps we've seen so far
  getMean() {
    // console.log(this.temperatures, this.sum, this.entries)
    return this.sum / this.entries;
  }

  // returns a mode of all temps we've seen so far
  getMode() {
    return this.mode;
  }
}
