rpio = require('rpio')


function blink() {
	rpio.open(12, rpio.OUTPUT, rpio.LOW)

	for (var i=0; i < 5; ++i) {
		rpio.write(12, rpio.HIGH);
		rpio.sleep(1)

		rpio.write(12, rpio.LOW)
		rpio.msleep(500)
	}
}


setTimeout(blink, 3000)

