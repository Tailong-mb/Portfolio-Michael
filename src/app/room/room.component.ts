import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

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

  scene = new THREE.Scene();

  private camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    100
  );

  @Input() public orbit = new OrbitControls(
    this.camera,
    this.renderer.domElement
  );

  private assetLoader = new GLTFLoader();

  private model: THREE.Group = new THREE.Group();

  constructor() {}

  ngOnInit(): void {}

  private createScene() {
    this.camera.position.set(10, 10, 10);
    this.orbit.update();

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
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
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
      component.renderer.render(component.scene, component.camera);
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
