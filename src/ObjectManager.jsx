import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import setupLights from './Lights';

class ObjectManager {
  constructor(canvas) {
    this.canvas = canvas;
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x000000);

    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.camera.position.z = 5;

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      alpha: true,
    });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    this.object = null;
    this.mixer = null;
    this.clock = new THREE.Clock();
    this.currentAction = null;
    this.actions = [];

    // Loading Manager
    this.loadingManager = new THREE.LoadingManager();
    this.loadingManager.onStart = () => {
      this.showLoading(true);
    };
    this.loadingManager.onLoad = () => {
      this.showLoading(false);
    };
    this.loadingManager.onProgress = (url, itemsLoaded, itemsTotal) => {
      console.log(`Loading: ${url}, ${itemsLoaded} / ${itemsTotal}`);
    };
    this.loadingManager.onError = (url) => {
      console.error(`Error loading: ${url}`);
    };
  }

  init() {
    setupLights(this.scene);
    this.loadObject();
    this.animate();
    window.addEventListener('scroll', this.handleScroll.bind(this));
    window.addEventListener('resize', this.updateRendererSize.bind(this));
  }

  loadObject() {
    const loader = new GLTFLoader(this.loadingManager);
    loader.load(
      'terbaru.glb',
      (gltf) => {
        this.object = gltf.scene;
        this.object.scale.set(40, 40, 40);
        this.camera.position.set(0, 45, 30); // Naikkan kamera di sumbu Y

        this.scene.add(this.object);

        if (gltf.animations.length) {
          this.mixer = new THREE.AnimationMixer(this.object);
          this.actions = gltf.animations.map((clip) =>
            this.mixer.clipAction(clip)
          );

          if (this.actions.length > 0) {
            this.currentAction = this.actions[0];
            this.currentAction.play();
          }
        }
      },
      undefined,
      (error) => {
        console.error('Failed to load object:', error);
      }
    );
  }

  showLoading(show) {
    const loaderElement = document.getElementById('loading-screen');
    if (show) {
      loaderElement.style.display = 'flex'; // Show the loading screen
    } else {
      loaderElement.style.display = 'none'; // Hide the loading screen
    }
  }

  handleScroll() {
    if (!this.object) return;

    const scrollY = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight;
    const viewportHeight = window.innerHeight;
    const scrollPercent = scrollY / (scrollHeight - viewportHeight);

    const angle = scrollPercent * Math.PI * 2;
    const radius = 2;

    // Circular positioning using trigonometry
    this.object.position.x = Math.sin(angle) * radius;
    this.object.position.y = Math.cos(angle - Math.PI / 2) * radius;

    this.object.rotation.y = angle;
  }

  updateRendererSize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  animate() {
    requestAnimationFrame(this.animate.bind(this));

    const delta = this.clock.getDelta();
    if (this.mixer) this.mixer.update(delta);

    this.renderer.render(this.scene, this.camera);
  }

  cleanup() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.updateRendererSize);
  }
}

export default ObjectManager;
