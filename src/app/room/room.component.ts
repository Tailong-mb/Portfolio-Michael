import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { PerspectiveCamera } from 'three';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss'],
})
export class RoomComponent implements OnInit {
  @ViewChild('canvas')
  private canvasRef!: ElementRef;

  private get canvas(): HTMLCanvasElement {
    return this.canvasRef.nativeElement;
  }

  private renderer = new THREE.WebGLRenderer();

  @Input() public rotationSpeedY: number = 0.007;

  private scene = new THREE.Scene();

  private perspectiveCamera!: PerspectiveCamera;

  private assetLoader = new GLTFLoader();

  private model: THREE.Group = new THREE.Group();

  private controls!: OrbitControls;

  constructor() {}

  ngOnInit(): void {}

  private createScene() {
    this.perspectiveCamera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000.0
    );

    this.perspectiveCamera.position.setY(-5);

    this.controls = new OrbitControls(
      this.perspectiveCamera,
      this.renderer.domElement
    );
    this.controls.target.set(0, 20, 0);
    this.controls.update();

    let light = new THREE.DirectionalLight(0xffffff, 1.0);
    light.position.set(20, 100, 10);
    light.target.position.set(0, 0, 0);
    light.castShadow = true;
    light.shadow.bias = -0.001;
    light.shadow.mapSize.width = 2048;
    light.shadow.mapSize.height = 2048;
    light.shadow.camera.near = 0.1;
    light.shadow.camera.far = 500.0;
    light.shadow.camera.near = 0.5;
    light.shadow.camera.far = 500.0;
    light.shadow.camera.left = 100;
    light.shadow.camera.right = -100;
    light.shadow.camera.top = 100;
    light.shadow.camera.bottom = -100;
    this.scene.add(light);

    let ambientLight = new THREE.AmbientLight(0x101010);
    this.scene.add(ambientLight);

    this.assetLoader.load(
      '../../assets/Ressources/bedroom.gltf',
      (gltf) => {
        this.model = gltf.scene;
        this.model.rotation.y = 0;
        this.model.rotation.x = 0;
        this.scene.add(this.model);
      },
      undefined,
      (error) => {
        console.log(error);
      }
    );

    window.addEventListener('resize', () => {
      this.perspectiveCamera.aspect = window.innerWidth / window.innerHeight;
      this.perspectiveCamera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    });
  }

  private startRenderingLoop() {
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas });
    this.renderer.setPixelRatio(devicePixelRatio);
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
    this.renderer.setClearColor(0xa3a3a3);

    let component: RoomComponent = this;
    (function render() {
      requestAnimationFrame(render);
      component.animateModel();
      component.renderer.render(component.scene, component.perspectiveCamera);
    })();
  }

  /**
   *Animate the model
   *
   * @private
   * @memberof RoomComponent
   */
  private animateModel() {
    this.model.rotation.y += this.rotationSpeedY;
  }

  ngAfterViewInit() {
    this.createScene();
    this.startRenderingLoop();
  }
}
