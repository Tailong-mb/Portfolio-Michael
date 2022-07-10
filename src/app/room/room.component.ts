import { Component, OnInit } from '@angular/core';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss'],
})
export class RoomComponent implements OnInit {
  private url = new URL(
    '../../assets/Ressources/bedroom.gltf',
    import.meta.url
  );

  private renderer = new THREE.WebGLRenderer();

  private scene = new THREE.Scene();

  private camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  private orbit = new OrbitControls(this.camera, this.renderer.domElement);

  private assetLoader = new GLTFLoader();

  constructor() {}

  ngOnInit(): void {
    this.createScene();
  }

  private createScene() {
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.renderer.domElement);
    this.renderer.setClearColor(0xa3a3a3);

    this.camera.position.set(10, 10, 10);
    this.orbit.update();

    this.assetLoader.load(
      this.url.href,
      (gltf) => {
        const model = gltf.scene;
        this.scene.add(model);
      },
      undefined,
      (error) => {
        console.log(error);
      }
    );

    this.renderer.setAnimationLoop(() => {
      this.renderer.render(this.scene, this.camera);
    });

    window.addEventListener('resize', () => {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    });
  }
}
