var scene = new THREE.Scene();
      var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

      var renderer = new THREE.WebGLRenderer({ alpha: true });
      renderer.setSize( window.innerWidth, window.innerHeight );
      document.body.appendChild( renderer.domElement );

      var geometry = new THREE.SphereGeometry( 1, 27, 27 );

      var greenMaterial = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
      var redMaterial = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
      var blueMaterial = new THREE.MeshBasicMaterial( { color: 0x0000ff } );
      var orangeMaterial = new THREE.MeshBasicMaterial( { color: 0xff9900 } );
      var blackMaterial = new THREE.MeshBasicMaterial( { color: 0x0f000f } );
      var yellowMaterial = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
      var purpleMaterial = new THREE.MeshBasicMaterial( { color: 0x9933CC } );

      var greenSphere = new THREE.Mesh( geometry, greenMaterial );
      var redSphere = new THREE.Mesh( geometry, redMaterial );
      var blueSphere = new THREE.Mesh( geometry, blueMaterial );
      var orangeSphere = new THREE.Mesh( geometry, orangeMaterial );
      var blackSphere = new THREE.Mesh( geometry, blackMaterial );
      var yellowSphere = new THREE.Mesh( geometry, yellowMaterial );
      var purpleSphere = new THREE.Mesh( geometry, purpleMaterial );

      scene.add( greenSphere );
      scene.add( redSphere );
      scene.add( blueSphere );
      scene.add( orangeSphere );
      scene.add( blackSphere );
      scene.add( yellowSphere );
      scene.add( purpleSphere );

      blackSphere.position.y = 0;

      redSphere.position.y = 1.9;
      redSphere.position.x = 1.05;

      blueSphere.position.y = -1.9;
      blueSphere.position.x = 1.05;

      orangeSphere.position.x = 2.1;

      greenSphere.position.x = -2.1;

      yellowSphere.position.y = 1.9
      yellowSphere.position.x = -1.05

      purpleSphere.position.y = -1.9
      purpleSphere.position.x = -1.05


      camera.position.z = 13;

      var render = function () {
        requestAnimationFrame( render );
        renderer.render(scene, camera);
      };

      render();
