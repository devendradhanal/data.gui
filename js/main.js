// 1. Basic Usage

// With very little code, dat.GUI creates an interface that you can use to modify variables.

// The property must be public, i.e. defined by this.prop = value
// dat.GUI determines controller type based on a property's initial value
// Press H to show/hide all GUI's.

FizzyText = function() {
    this.message = 'dat.gui';
    this.speed = 0.8;
    this.displayOutline = false;
    this.explode = function() {
    	alert('Ka boom!!!');
    };
    // Define render logic ...
};



window.onload = function() {
    var text = new FizzyText();
    var gui = new dat.GUI();
    gui.add(text, 'message');
    gui.add(text, 'speed', -5, 5);
    gui.add(text, 'displayOutline');
    gui.add(text, 'explode');
};
