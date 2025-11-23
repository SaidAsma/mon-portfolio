// Configuration de la scène Three.js
let scene, camera, renderer, controls;
let cubes = [];
let particles = [];

function init() {
    // Créer la scène
    scene = new THREE.Scene();
    
    // Créer la caméra
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;
    
    // Créer le rendu
    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    document.getElementById('three-container').appendChild(renderer.domElement);
    
    // Ajouter des contrôles d'orbite
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = false;
    
    // Ajouter des cubes flottants
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshPhongMaterial({
        color: 0x9c27b0,  // Changé en magenta
        transparent: true,
        opacity: 0.1,
        wireframe: true
    });
    
    for (let i = 0; i < 15; i++) {
        const cube = new THREE.Mesh(geometry, material);
        cube.position.x = (Math.random() - 0.5) * 20;
        cube.position.y = (Math.random() - 0.5) * 20;
        cube.position.z = (Math.random() - 0.5) * 20;
        cube.rotation.x = Math.random() * Math.PI;
        cube.rotation.y = Math.random() * Math.PI;
        cube.scale.setScalar(Math.random() * 0.5 + 0.5);
        scene.add(cube);
        cubes.push({
            mesh: cube,
            speed: {
                x: (Math.random() - 0.5) * 0.01,
                y: (Math.random() - 0.5) * 0.01,
                z: (Math.random() - 0.5) * 0.01
            }
        });
    }
    
    // Ajouter des particules
    const particleCount = 500;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount * 3; i++) {
        positions[i] = (Math.random() - 0.5) * 50;
    }
    
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    
    const particleMaterial = new THREE.PointsMaterial({
        color: 0xe91e63,  // Changé en rose
        size: 0.05,
        transparent: true,
        opacity: 0.6
    });
    
    const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particleSystem);
    
    // Ajouter des lumières
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xe91e63, 0.8);  // Changé en rose
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);
    
    const pointLight = new THREE.PointLight(0x9c27b0, 0.5, 100);  // Changé en magenta
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);
    
    // Gérer le redimensionnement de la fenêtre
    window.addEventListener('resize', onWindowResize);
    
    // Commencer l'animation
    animate();
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
    requestAnimationFrame(animate);
    
    // Animer les cubes
    cubes.forEach(cube => {
        cube.mesh.rotation.x += cube.speed.x;
        cube.mesh.rotation.y += cube.speed.y;
        cube.mesh.rotation.z += cube.speed.z;
        
        // Mouvement de flottement
        cube.mesh.position.y += Math.sin(Date.now() * 0.001 + cube.mesh.position.x) * 0.001;
    });
    
    controls.update();
    renderer.render(scene, camera);
}

// Initialiser Three.js
init();