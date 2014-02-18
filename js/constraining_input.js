FizzyText = function() {
    this.noiseStrength = 55;
    this.speed = 0.8;
    this.growthSpeed = 0.0;
    this.message = 'Ka boom!!!';
    this.maxSize = 0.1;
};


// 2. Constraining Input

// You can specify limits on numbers. A number with a min and max value becomes a slider.
window.onload = function() {
    text = new FizzyText();
    var gui = new dat.GUI();
    gui.add(text, 'noiseStrength').step(5); // Increment amount
    gui.add(text, 'growthSpeed', -5, 5); // Min and max
    gui.add(text, 'maxSize').min(0).step(0.25); // Mix and match
    // You can also choose to select from a dropdown of values for both numbers and strings.

    // Choose from accepted values
    gui.add(text, 'message', ['pizza', 'chrome', 'hooray']);

    // Choose from named values
    gui.add(text, 'speed', {
        Stopped: 0,
        Slow: 0.1,
        Fast: 5
    });
}
