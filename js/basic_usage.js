// 1. Basic Usage
// With very little code, dat.GUI creates an interface that you can use to modify variables.

// <script type="text/javascript" src="dat.gui.js"></script>
// <script type="text/javascript">


$(document).ready(function(evt) {
    // alert('Hi');
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(new THREE.Color(0xEEEEEE), 1.0);
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.z = 300;

    scene = new THREE.Scene();
    scene.add(camera);

    light = new THREE.SpotLight();
    light.position.set(170, 330, -160);
    scene.add(light);

    geo = new THREE.CubeGeometry(50, 50, 50);
    mat = new THREE.MeshBasicMaterial({
        color: 0x000,
        wireframe: true
    });
    litCube = new THREE.Mesh(geo, mat);
    litCube.position.y = 50;
    litCube.rotation.x = Math.PI / 5;
    litCube.rotation.y = Math.PI / 5;
    scene.add(litCube);


    document.body.appendChild(renderer.domElement);
    // console.log($('body'));
    run();
});


controller = function() {
    this.speed = 0.01;
    this.cubeColor = '#000000';
    // this.wireFrame = litCube.material.wireframe;
    this.wireFrame = true;
}

ctrl = new controller();
var gui = new dat.GUI();
gui.add(ctrl, 'speed', 0.001, 0.500);
gui.add(ctrl, 'wireFrame');
gui.addColor(ctrl, 'cubeColor');


function run() {
    requestAnimationFrame(run);
    litCube.rotation.y += ctrl.speed;
    litCube.material.color = new THREE.Color(ctrl.cubeColor);
    litCube.material.wireframe = ctrl.wireFrame
    renderer.render(scene, camera);
}



/*var FizzyText = function() {
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
};*/

// </script>
// The property must be public, i.e. defined by this.prop = value
// dat.GUI determines controller type based on a property's initial value
// Press H to show/hide all GUI's.
