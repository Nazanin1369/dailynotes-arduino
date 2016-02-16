var five = require('johnny-five'),
    board = new five.Board(),
    lcd;

 board.on('ready', function() {
    lcd = new five.LCD({
        pins: [4, 7, 10, 11, 12, 13],
        backlight: 6,
        rows: 2,
        cols: 20
    });

    lcd.useChar("check");
    lcd.useChar("heart");
    lcd.useChar("duck");
	var that =  this;

    setInterval(function() {
        lcd.clear().print('Daily Note: ');
        lcd.cursor(1, 0).print("Stay Sharp!");

        that.wait(4000, function() {
            lcd.clear().cursor(0, 0).print("Study!!!");
        });
    }, 6000);


    this.repl.inject({
        lcd: lcd
    });
 });
