class TimeInterval {
  constructor({
    delay,
    onTick
  }) {
    this._delay = delay
    this._onTick = onTick

    this._startTimestamp = null
    this._requestID = null
    this._tickTimestamp = null
  }

  _start() {
    this._next()
  }

  _next() {
    this._requestID = window.requestAnimationFrame(timestamp => this._tick(timestamp))
  }

  _tick(timestamp) {
    if (this._startTimestamp === null) {
      this._startTimestamp = timestamp
    }

    if (timestamp - this._tickTimestamp >= this._delay || this._tickTimestamp === null) {
      this._tickTimestamp = timestamp
      this._onTick()
    }

    this._next()
  }

  start() {
    this._start()
  }

  stop() {
    this._reset()
  }

  _reset() {
    window.cancelAnimationFrame(this._requestID)
    this._requestID = null
  }
}

export default TimeInterval
