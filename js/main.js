var scene = new THREE.Scene();
      var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

      var renderer = new THREE.WebGLRenderer();
      renderer.setSize( window.innerWidth, window.innerHeight );
      document.body.appendChild( renderer.domElement );

      var geometry = new THREE.SphereGeometry( 1, 27, 27 );
      var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
      var sphere = new THREE.Mesh( geometry, material );
      scene.add( sphere );

      camera.position.z = 13;

      var render = function () {
        requestAnimationFrame( render );
        renderer.render(scene, camera);
      };

      render();
