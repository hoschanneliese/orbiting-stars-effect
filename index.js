import * as THREE from 'three';
import { gsap } from 'gsap';

class OrbitingStarsEffect {
  constructor(containerId, options = {}) {
    this.container = document.getElementById(containerId);
    this.options = {
      starCount: options.starCount || 100,
      orbitRadius: options.orbitRadius || 200,
      animationDuration: options.animationDuration || 5
    };
    this.init();
  }

  init() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.container.appendChild(this.renderer.domElement);

    this.createStars();
    this.animate();
  }

  createStars() {
    const geometry = new THREE.SphereGeometry(1, 24, 24);
    const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
    for (let i = 0; i < this.options.starCount; i++) {
      const star = new THREE.Mesh(geometry, material);
      const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(this.options.orbitRadius));
      star.position.set(x, y, z);
      this.scene.add(star);
    }
  }

  animate() {
    requestAnimationFrame(this.animate.bind(this));
    this.renderer.render(this.scene, this.camera);

    this.scene.traverse(object => {
      if (object.isMesh) {
        object.rotation.x += 0.001;
        object.rotation.y += 0.001;
      }
    });

    gsap.to(this.scene.rotation, {
      y: "+=2*Math.PI",
      duration: this.options.animationDuration,
      ease: "none",
      repeat: -1
    });
  }
}

export default OrbitingStarsEffect;
