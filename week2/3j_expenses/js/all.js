if (!Detector.webgl) Detector.addGetWebGLMessage();

var camera, scene, renderer, stats;
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



//++=============ATTEMP # 1 =========================
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

$.getJSON("../../data/ExpenseExport.json", function(data) {
  var dataArray = data.expenses
  var categoryList = getCategories(dataArray)
    // console.log(dataArray)

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

  console.log('init')

  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
  camera.position.set(0, 10, 40);

  scene = new THREE.Scene();
  scene.add(new THREE.AmbientLight(0x222233));
  scene.add(new THREE.AmbientLight(0x222233));
  // scene.add(camera)

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

  pointLight = createLight(0x00ff00);
  scene.add(pointLight);

  pointLight2 = createLight(0xff0000);
  scene.add(pointLight2);

  var geometry = new THREE.PlaneGeometry(50, 50, 32);
  var material = new THREE.MeshLambertMaterial({
    color: 0xff0000,
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




  for (var i = 0; i < newList.length; i++) {




    var height = newList[i].cost
    var geometry = new THREE.BoxGeometry(2,
      height, 2);
    geometry.applyMatrix(new THREE.Matrix4().makeTranslation(0, height / 2, 0));
    var material = new THREE.MeshStandardMaterial({
      color: new THREE.Color(Math.random(1)),

    })
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.x = 4 * i;
    mesh.receiveShadow = true;

    scene.add(mesh)
    meshArray.push(mesh)
  }



  renderer = new THREE.WebGLRenderer({
    antialias: true
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = true;
  // renderer.shadowMapEnabled = true;
  renderer.shadowMap.type = THREE.BasicShadowMap;
  document.body.appendChild(renderer.domElement);

  controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.target.set(0, 10, 0);
  controls.update();

  stats = new Stats();
  document.body.appendChild(stats.dom);

  //

  window.addEventListener('resize', onWindowResize, false);

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

  var time = performance.now() * 0.001;

  pointLight.position.x = Math.sin(time) * 9;
  pointLight.position.y = Math.sin(time * 1.1) * 9 + 5;
  pointLight.position.z = Math.sin(time * 1.2) * 9;

  time += 10000;

  pointLight2.position.x = Math.sin(time) * 9;
  pointLight2.position.y = Math.sin(time * 1.1) * 9 + 5;
  pointLight2.position.z = Math.sin(time * 1.2) * 9;
  //
  // torusKnot.rotation.y = time * 0.1;

  renderer.render(scene, camera);

  stats.update();

}
