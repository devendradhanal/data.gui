// 8. Custom Placement

// By default, dat.GUI panels are created with fixed position, and are automatically appended to a DOM Element of dat.GUI's creation.

// You can change this behavior by setting the autoPlace parameter to false.
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
    var gui = new dat.GUI({
        autoPlace: false
    });

    var customContainer = document.getElementById('my-gui-container');
    customContainer.appendChild(gui.domElement);
    
    gui.add(text, 'message');
    gui.add(text, 'speed', -5, 5);
    gui.add(text, 'displayOutline');
    gui.add(text, 'explode');
};
