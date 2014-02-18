FizzyText = function() {
    this.noiseStrength = 55;
    this.speed = 0.8;
    this.growthSpeed = 0.0;
    this.message = 'Ka boom!!!';
    this.maxSize = 0.1;
};
window.onload = function() {

	text = new FizzyText();
    gui = new dat.GUI();

    // 3. Folders

	// You can nest as many GUI's as you please. Nested GUI's act as collapsible folders.
    var f1 = gui.addFolder('Flow Field');
    f1.add(text, 'speed');
    f1.add(text, 'noiseStrength');

    var f2 = gui.addFolder('Letters');
    f2.add(text, 'growthSpeed');
    f2.add(text, 'maxSize');
    f2.add(text, 'message');

    f2.open();
}
