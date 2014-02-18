// 5. Saving Values

// Add a save menu to the GUI interface by calling gui.remember on all the objects you've added to the GUI.
FizzyText = function() {
    this.message = 'dat.gui';
    this.speed = 0.8;
    this.growthSpeed = 0.1;
    this.maxSize = 1.2;
    // Define render logic ...
};


// var preset_1 = '{"preset": "Default","closed": false,"remembered": {"Default": {"0": {"message": "saving","speed": 0.4,"growthSpeed": 0.37,"maxSize": 6.4}}},"folders": {}}';
var x = {
  "preset": "Dev",
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
    }
  },
  "folders": {}
};

window.onload = function() {
    text = new FizzyText();
    // gui = new dat.GUI({load:preset_1});
    gui = new dat.GUI({load:x});

    gui.remember(text);

    gui.add(text, 'message');
    gui.add(text, 'speed', -5, 5);
    gui.add(text, 'growthSpeed');
    gui.add(text, 'maxSize');

    
};



// Add controllers ...

// Click the  icon to change your save settings. You can either save your GUI's values to localStorage, or by copying and pasting a JSON object into your source code as follows:
/*
var fizzyText = new FizzyText();
var gui = new dat.GUI({ load: JSON });

gui.remember(fizzyText);*/

// Add controllers ...