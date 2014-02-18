// 7. Events

FizzyText = function() {
    this.message = 'dat.gui';
    this.speed = 0.8;
    this.displayOutline = false;
    this.explode = function() {
        alert('Ka boom!!!');
    };
    this.maxSize = 6.5;
    // Define render logic ...
};



window.onload = function() {
    text = new FizzyText();
    gui = new dat.GUI();
    gui.add(text, 'message');
    gui.add(text, 'speed', -5, 5);
    gui.add(text, 'displayOutline');
    gui.add(text, 'explode');


    // You can listen for events on individual controllers using an event listener syntax.
    controller = gui.add(text, 'maxSize', 0, 10);

    controller.onChange(function(value) {
        // Fires on every change, drag, keypress, etc.
        console.log('firing : dhishkyanv');
    });

    controller.onFinishChange(function(value) {
        // Fires when a controller loses focus.
        alert("The new value is " + value);
    });
};
