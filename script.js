document.getElementById('enter-site').addEventListener('click', () => {
    document.getElementById('landing-page').classList.add('hidden');
    document.getElementById('sphere-section').classList.remove('hidden');
    initializeSphere();
});

function initializeSphere() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('sphere-container').appendChild(renderer.domElement);

    const geometry = new THREE.SphereGeometry(5, 32, 32);
    const material = new THREE.MeshBasicMaterial({ color: 0x0077ff, wireframe: true });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    camera.position.z = 10;

    const animate = function () {
        requestAnimationFrame(animate);

        sphere.rotation.x += 0.01;
        sphere.rotation.y += 0.01;

        renderer.render(scene, camera);
    };

    animate();

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
}

document.querySelectorAll('.hover-button').forEach(button => {
    button.addEventListener('mouseenter', event => {
        const imageSrc = event.target.getAttribute('data-image');
        const imageDisplay = document.getElementById('image-display');
        imageDisplay.style.backgroundImage = `url(${imageSrc})`;
        imageDisplay.style.display = 'block';
        imageDisplay.style.height = '100px';
        imageDisplay.style.width = '100px';
    });
    button.addEventListener('mouseleave', () => {
        document.getElementById('image-display').style.display = 'none';
    });
});
