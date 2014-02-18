// 6. Presets


FizzyText = function() {
    this.message = 'dat.gui';
    this.speed = 0.8;
    this.growthSpeed = 0.1;
    this.maxSize = 1.2;
    // Define render logic ...
};

var x = {
    "preset": "Gee",
    "closed": false,
    "remembered": {
        "Default": {
            "0": {
                "message": "datHello",
                "speed": -3.0491109229466553,
                "growthSpeed": 0.22,
                "maxSize": 0.9
            }
        },
        "Dev": {
            "0": {
                "message": "Dev",
                "speed": 1.5029635901778153,
                "growthSpeed": 0.24,
                "maxSize": 1.9
            }
        },
        "Gee": {
            "0": {
                "message": "asd",
                "speed": -1.5317527519051648,
                "growthSpeed": 0.17,
                "maxSize": 1.7
            }
        }
    },
    "folders": {}
};


// The save menu also allows you to save all of your settings as presets. Click Save to modify the current preset, or New to create a new preset from existing settings. Clicking Revert will clear all unsaved changes to the current preset.

// Switch between presets using the dropdown in the save menu. You can specify the default preset as follows:

window.onload = function() {
    text = new FizzyText();
    // gui = new dat.GUI({load:preset_1});
    gui = new dat.GUI({
        load: x,
        preset: 'Gee'
    });

    gui.remember(text);

    gui.add(text, 'message');
    gui.add(text, 'speed', -5, 5);
    gui.add(text, 'growthSpeed');
    gui.add(text, 'maxSize');


};

// A word of caution about localStorage:

// Paste the JSON save object into your source frequently. Using localStorage to save presets can make you faster, but its easy to lose your settings by clearing browsing data, changing browsers, or even by changing the URL of the page you're working on.
