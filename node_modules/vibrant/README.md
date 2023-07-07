vibrant
====

[![Build Status](https://travis-ci.org/jarofghosts/vibrant.png?branch=master)](https://travis-ci.org/jarofghosts/vibrant)

stream data to the browser's `vibrate()` api

## example

```js
var vibrant = require('vibrant')()

vibrant.write([1000, 1000])
```

## notes

data written to vibrant will be streamed unmodified

vibrant takes a number of optional arguments `vibrant(pause, vibrate, timeout)`

* `pause`: the default time to pause after a vibration sequence if none is
specified. (defaults to 0)
* `vibrate`: the function to call to handle vibration, may be passed an array
or a number. (defaults to `navigator.vibrate || navigator.mozVibrate`)
* `timeout`: the function used to schedule vibration. (defaults to
`setTimeout`)

## license

MIT
