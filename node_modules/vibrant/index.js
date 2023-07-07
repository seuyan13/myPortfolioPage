var through = require('through')

module.exports = vibrant

function vibrant(_delay, _vibrate, _timeout) {
  var timeout = _timeout || settimeout,
      delay = _delay || 0

  var running = false,
      is_done = false,
      queue = [],
      wait = 0,
      vibrate,
      next

  if (typeof window !== 'undefined' && window.navigator) {
    vibrate = window.navigator.vibrate || window.navigator.mozVibrate
    vibrate = vibrate.bind(window.navigator)
  }

  vibrate = _vibrate || vibrate

  var vibrant_stream = through(do_vibrate, done)

  return vibrant_stream

  function do_vibrate(data) {
    queue.push(data)
    vibrant_stream.queue(data)
    if (!running) do_next()
  }

  function do_next() {
    if (!queue.length) {
      running = false
      return is_done ? done() : null
    }

    next = queue.shift()
    running = true

    if (Array.isArray(next)) {
      wait = next.reduce(sum)
    } else {
      wait = next + delay
      next = +next
    }

    vibrate(next)

    timeout(do_next, wait)
  }

  function done() {
    if (!running && !queue.length) return vibrant_stream.queue(null)
    is_done = true
  }
}

function sum(a, b) {
  return a + b
}

function settimeout() {
  return setTimeout.apply(null, arguments)
}
