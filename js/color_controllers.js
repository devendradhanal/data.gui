// 4. Color Controllers

// dat.GUI has a color selector and understands many different representations of color. 
// The following creates color controllers for color variables of different formats
var FizzyText = function() {
	// document.body.backgroundColor = 
	// this.colorBack = document.body.backgroundColor;
	// this.colorBack =  "#ff0";
    this.color0 = "#ffae23"; // CSS string
    this.color1 = [0, 128, 255]; // RGB array
    this.color2 = [0, 128, 255, 0.3]; // RGB with alpha
    this.color3 = {
        h: 350,
        s: 0.9,
        v: 0.3
    }; // Hue, saturation, value
    this.changeColor = function() {
    	document.body.style.backgroundColor = this.color0;
    	// $('body').css("background-color",this.color1);
    };
    // Define render logic ...

};

window.onload = function() {

    text = new FizzyText();
    gui = new dat.GUI();

    gui.addColor(text, 'color0');
    gui.addColor(text, 'color1');
    gui.addColor(text, 'color2');
    gui.addColor(text, 'color3');
    gui.add(text, 'changeColor');


};
// dat.GUI will modify colors in the format defined by their initial value.
