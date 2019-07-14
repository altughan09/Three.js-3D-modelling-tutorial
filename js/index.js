var scene, camera, renderer;
      function init() {
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(25,window.innerWidth/window.innerHeight,1,1000);
        camera.rotation.y = 45/180*Math.PI;
        camera.position.x = -50;
        camera.position.y = -5;
        camera.position.z = 25;
        controls = new THREE.OrbitControls(camera);
        controls.addEventListener('change', renderer);
        controls.minDistance = 10;
        controls.maxDistance = 50;
        light = new THREE.PointLight(0xb7b7b7,5);
        light.position.set(0,100,200);
        scene.add(light);
        light2 = new THREE.PointLight(0xb7b7b7,5);
        light2.position.set(200,0,0);
        scene.add(light2);
        light3 = new THREE.PointLight(0xb7b7b7,5);
        light3.position.set(0,100,-200);
        scene.add(light3);
        renderer = new THREE.WebGLRenderer({antialias:true, alpha: true});
        renderer.setSize(window.innerWidth,window.innerHeight);
        document.body.appendChild(renderer.domElement);
        var loader = new THREE.GLTFLoader();
        loader.load('/model/scene.gltf', function(gltf){
          aircraft = gltf.scene.children[0];
          aircraft.scale.set(0.5,0.5,0.5);
          scene.add(gltf.scene);
          animate();
        });
      }
      function animate() {
        renderer.render(scene,camera);
        requestAnimationFrame(animate);
      }
      init();