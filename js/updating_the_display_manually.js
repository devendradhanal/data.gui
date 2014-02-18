// 10. Updating the Display Manually

FizzyText = function() {
    this.message = 'dat.gui';
    this.noiseStrength = 0.8;
    this.displayOutline = false;
    this.explode = function() {
    	alert('Ka boom!!!');
    };
    // Define render logic ...
};

// If you'd like to update controllers in a loop of your own definition, use the updateDisplay method.

fizzyText = new FizzyText();
gui = new dat.GUI();

gui.add(fizzyText, 'noiseStrength', 0, 1);

var update = function() {

  requestAnimationFrame(update);
  fizzyText.noiseStrength = Math.cos(Math.random());

  // Iterate over all controllers
  for (var i in gui.__controllers) {
    gui.__controllers[i].updateDisplay();
  }

};

update();