if (!Detector.webgl) Detector.addGetWebGLMessage();

var camera, scene, renderer, stats, raycaster, mouse;
var pointLight, pointLight2;
var torusKnot;
var meshArray = []

///parse the JSON
var newList = []
var foodCosts = []
var alcCosts = []
var categoryOptions = []
var totalAlcCost = totalFoodCost = 0;
var newList = []
var colorPalette = []
var currentHeight=[]
var button;
var buttonHit = false;


// console.log('this pages loaded')


function getCategories(a) {
  var empty = {};
  return a.filter(function(item) {
    return empty.hasOwnProperty(item.category) ? false : (empty[item.category] = true);
  }).map(function(item) {
    return item.category
  })
}

function subtotal(list, category) {
  return list.map(function(el) {
      if (el.category === category) {
        return parseInt(el.cost);
      } else {
        return 0;
      }
    })
    .reduce(function(a, value) {
      return a + value;
    });
}

$.getJSON("assets/ExpenseExport.json", function(data) {
  var dataArray = data.expenses
  var categoryList = getCategories(dataArray)
    console.log(dataArray)

  for (var t in getCategories(dataArray)) {
    newList.push({
      'category': categoryList[t],
      'cost': subtotal(dataArray, categoryList[t])
    })
  }

  init();
  animate();

});


function init() {
  // console.log('init was called')

raycaster = new THREE.Raycaster();
mouse = new THREE.Vector2();

  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, .1, 1000);
  camera.position.set(0, 10, 90);

  scene = new THREE.Scene();
  scene.add(new THREE.AmbientLight(0xffffff));
  scene.add(new THREE.AmbientLight(0xffffff));
  // renderer = new THREE.WebGLRenderer();

  renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true
  });
  // renderer.setClearColor(new THREE.Color(0xfffff, 0.0));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = true;

  document.body.appendChild(renderer.domElement);

  controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.target.set(0, 10, 0);
  controls.update();

  stats = new Stats();
  document.body.appendChild(stats.dom);


  // Lights

  function createLight(color) {

    var pointLight = new THREE.PointLight(color, 1, 30);
    pointLight.castShadow = true;
    pointLight.shadow.camera.near = 1;
    pointLight.shadow.camera.far = 30;
    // pointLight.shadowCameraVisible = true;
    pointLight.shadow.bias = 0.01;

    var geometry = new THREE.SphereGeometry(1, 12, 6);
    var material = new THREE.MeshBasicMaterial({
      color: color
    });
    var sphere = new THREE.Mesh(geometry, material);
    // pointLight.add(sphere);

    return pointLight

  }

  pointLight = createLight(0xffffff);
  scene.add(pointLight);

  var dirLight = new THREE.DirectionalLight();
      dirLight.position.set(25, 23, 15);
      scene.add(dirLight);

  pointLight2 = createLight(0xffffff);
  scene.add(pointLight2);

  var geometry = new THREE.PlaneGeometry(50, 50, 62);
  var material = new THREE.MeshLambertMaterial({
    color: 0xffffff,
    // shininess: 100,
    // specular: 0x222222
  });
  baseBoard = new THREE.Mesh(geometry, material);
  baseBoard.position.set(5, 0, 0)
  baseBoard.rotation.x = -1.57
  baseBoard.castShadow = true;
  baseBoard.receiveShadow = true;
  scene.add(baseBoard);

  function createMesh(geometry) {
    // assign two materials
    var meshMaterial = new THREE.MeshNormalMaterial();
    meshMaterial.side = THREE.DoubleSide;
    var wireframeMaterial = new THREE.MeshBasicMaterial();
    wireFrameMaterial.wireframe = true;
    // create a multimaterial
    var mesh = THREE.SceneUtils.createMultiMaterialObject(
      geometry, [meshMaterial, wireframeMaterial]);
    return mesh;
  }

//=====make animation box=========
  var texture = new THREE.TextureLoader().load( "assets/anim.png" );
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(1,1);
  var geometry = new THREE.BoxGeometry( 3, 1, 1 );
var material = new THREE.MeshBasicMaterial( {color: 0xffffff, map: texture} );
button = new THREE.Mesh( geometry, material );
button.position.set(-15,20,0)
scene.add( button );




  for (var i = 0; i < newList.length; i++) {


    var color = new THREE.Color();

    colorPalette[i] = color.setHSL( i*.2, .64, .64 )

    var height = newList[i].cost
    var geometry = new THREE.BoxGeometry(2,
      2, 2);
    geometry.applyMatrix(new THREE.Matrix4().makeTranslation(0, 0, 0));
    var material = new THREE.MeshStandardMaterial({
      color: colorPalette[i]

    })
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.x = -10+ 4 * i;
    mesh.receiveShadow = true;

    scene.add(mesh)
    meshArray.push(mesh)
  }


}


  window.addEventListener('resize', onWindowResize, false);
  document.addEventListener( 'mousedown', onDocumentMouseDown, false );
  window.addEventListener('deviceorientation', setOrientationControls, true);


function onDocumentMouseDown( event ) {

      event.preventDefault();

      mouse.x = ( event.clientX / renderer.domElement.clientWidth ) * 2 - 1;
      mouse.y = - ( event.clientY / renderer.domElement.clientHeight ) * 2 + 1;

      raycaster.setFromCamera( mouse, camera );

      var intersects = raycaster.intersectObjects( [button] );

      if ( intersects.length > 0 ) {

        buttonHit = true;

      }
    }



function onWindowResize() {

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);

}

function animate() {

  requestAnimationFrame(animate);
  render();

}


function render() {
  var move = 0;

  if (buttonHit) {
        for (i in meshArray) {
          currentHeight[i] = newList[i].cost
        }
        buttonHit = false;

      }
    for (i in meshArray){
      if (meshArray[i].scale.y < currentHeight[i]) {
          move +=.1
          meshArray[i].applyMatrix(new THREE.Matrix4().makeTranslation(0,move,0))
          meshArray[i].scale.y +=.3
      }

    }



  var time = performance.now() * 0.001;

  pointLight.position.x = Math.sin(time) * 9;
  pointLight.position.y = Math.sin(time * 1.1) * 9 + 5;
  pointLight.position.z = Math.sin(time * 1.2) * 9;

  time += 10000;

  pointLight2.position.x = Math.sin(time) * 9;
  pointLight2.position.y = Math.sin(time * 1.1) * 9 + 5;
  pointLight2.position.z = Math.sin(time * 1.2) * 9;


  renderer.render(scene, camera);

  stats.update();




}




function setOrientationControls(e) {
    if (!e.alpha) {
        return;
    }

    controls = new THREE.DeviceOrientationControls(camera, true);
    controls.connect();
    controls.update();

    window.removeEventListener('deviceorientation', setOrientationControls, true);

    if (renderer.domElement) {
        renderer.domElement.addEventListener('click', function () {

            if (this.requestFullscreen) {
                this.requestFullscreen();
            } else if (this.msRequestFullscreen) {
                this.msRequestFullscreen();
            } else if (this.mozRequestFullScreen) {
                this.mozRequestFullScreen();
            } else if (this.webkitRequestFullscreen) {
                this.webkitRequestFullscreen();
            }

        });

        renderer = new THREE.StereoEffect(renderer);
        renderer.setSize(window.innerWidth, window.innerHeight);

        mobile = true;

    }
}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);

}

function getCubeMap(i) {
    var cubeMap = new THREE.Texture([]);
    cubeMap.format = THREE.RGBFormat;
    cubeMap.flipY = false;

    var envMaps = [
        {file: "sunset.jpg", size: 512},
        {file: "Above_The_Sea.jpg", size: 1024},
        {file: "bluecloud.jpg", size: 1024},
        {file: "fog.jpg", size: 512},
        {file: "frozen.jpg", size: 512},
        {file: "op.jpg", size: 1024},
        {file: "shinyblue.jpg", size: 1024},
        {file: "skyboxsun25degtest.jpg", size: 1024},
        {file: "stormydays_large.jpg", size: 1024},
        {file: "violentdays_large.jpg", size: 1024},
        {file: "darkness.jpg", size: 1024},
    ];

    var loader = new THREE.ImageLoader();
    var pre = "assets/textures/";
    var file = pre + envMaps[i].file;
    var size = envMaps[i].size;
    loader.load(file, function (image) {
        var getSide = function (x, y) {

            var canvas = document.createElement('canvas');
            canvas.width = size;
            canvas.height = size;

            var context = canvas.getContext('2d');
            context.drawImage(image, -x * size, -y * size);

            return canvas;

        };

        cubeMap.image[ 0 ] = getSide(2, 1); // px
        cubeMap.image[ 1 ] = getSide(0, 1); // nx
        cubeMap.image[ 2 ] = getSide(1, 0); // py
        cubeMap.image[ 3 ] = getSide(1, 2); // ny
        cubeMap.image[ 4 ] = getSide(1, 1); // pz
        cubeMap.image[ 5 ] = getSide(3, 1); // nz
        cubeMap.needsUpdate = true;

    });

    return cubeMap;
}

//
//  var geom = new THREE.Geometry()
//  for (var i = 0; i < container.children.length; i++) {
//  container.children[i].updateMatrix();
//  geom.merge(container.children[i].geometry, container.children[i].matrix);
//  }
//  container = new THREE.Mesh(geom, mat);
//
//
//
//  var cubeShader = THREE.ShaderLib['cube'];
//  cubeShader.uniforms['tCube'].value = getCubeMap(10);
//
//  var skyBoxMaterial = new THREE.ShaderMaterial({
//  fragmentShader: cubeShader.fragmentShader,
//  vertexShader: cubeShader.vertexShader,
//  uniforms: cubeShader.uniforms,
//  depthWrite: false,
//  side: THREE.BackSide
//  });
//
//  var skyBox = new THREE.Mesh(new THREE.CubeGeometry(100, 100, 100),skyBoxMaterial);
//
//  scene.add(skyBox);
//
//
//
//  var hemiLight = new THREE.HemisphereLight( 0xffffff, 0xffffff, 0.6 );
//  hemiLight.color.setHSL( 0.6, 1, 0.6 );
//  hemiLight.groundColor.setHSL( 0.095, 1, 0.75 );
//  hemiLight.position.set( 0, 0, 0 );
//  scene.add( hemiLight );
//
//
//
//                 var ambientLight = new THREE.AmbientLight(0x999999);
//                 scene.add(ambientLight);
//
//
// var texture = new THREE.TextureLoader().load("textures/image2.jpg");
//         texture.wrapS = THREE.RepeatWrapping;
//         texture.wrapT = THREE.RepeatWrapping;
//         texture.repeat.set(1, 1);
//
//
