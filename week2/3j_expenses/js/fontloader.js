var loader = new THREE.FontLoader();

loader.load( '../3j_expenses/fonts/hel.typeface.json', function ( font ) {

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

    var textMaterial = new THREE.MeshPhongMaterial( { color: 0xff0000 } );

    var mesh = new THREE.Mesh( textGeo, textMaterial );
    var scalar = .023
    mesh.scale.set(scalar,scalar,scalar);
    mesh.position.set( -11+i*4,0,2 );

    scene.add( mesh );
  }

} );

// loader.onLoadComplete=function(){scene.add( mesh )}
