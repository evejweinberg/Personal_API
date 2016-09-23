var loader = new THREE.FontLoader();

loader.load( '../expenses/fonts/hel.typeface.json', function ( font ) {
  console.log('font loader done')
  makeLeftNumbers(font)

    for (var i = 0; i < newList.length; i++) {

    var textGeo = new THREE.TextGeometry( newList[i].category, {

        font: font,

        size: 20,
        height: .2,
        curveSegments: 12,

        bevelThickness: 0,
        bevelSize: 0,
        bevelEnabled: true

    } );

    var textMaterial = new THREE.MeshBasicMaterial( { color: colorPalette[i] } );

    var mesh = new THREE.Mesh( textGeo, textMaterial );
    var scalar = .023
    mesh.scale.set(scalar,scalar,scalar);
    mesh.position.set( -11+i*4,0,2 );

    scene.add( mesh );
  }

} );


function makeLeftNumbers(font){

  var i = 0;
  while (i<101){
    var textGeo = new THREE.TextGeometry( i, {

        font: font,

        size: 20,
        height: .2,
        curveSegments: 12,

        bevelThickness: 0,
        bevelSize: 0,
        bevelEnabled: true

    } );

    var textMaterial = new THREE.MeshBasicMaterial( { color: colorPalette[i%colorPalette.length] } );

    var number = new THREE.Mesh( textGeo, textMaterial );
    var scalar = .023
    number.scale.set(scalar,scalar,scalar);
    number.position.set( -12,-10+i+10,0 );

    scene.add( number );

    i+=10
  }
}

// loader.onLoadComplete=function(){scene.add( mesh )}
