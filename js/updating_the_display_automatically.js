// 9. Updating the Display Automatically

FizzyText = function() {
    this.message = 'dat.gui';
    this.noiseStrength = 50;
    // Define render logic ...
};




// If you'd like controllers to react to changes made outside of the GUI, use the listen method.
window.onload = function() {
    text = new FizzyText();
    gui = new dat.GUI();

    gui.add(text, 'message');
    gui.add(text, 'noiseStrength', 0, 1000).listen();

    var update = function() {
        requestAnimationFrame(update);
        text.noiseStrength = Math.random() * 1000;
    };

    update();
    // Calling listen on a controller adds it to an internal interval of dat.GUI's creation. This interval checks for changes to a p

};
