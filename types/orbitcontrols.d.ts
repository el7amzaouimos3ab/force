// orbitcontrols.d.ts
declare module 'three/examples/jsm/controls/OrbitControls' {
    import { Camera, EventDispatcher, MOUSE, Vector2 } from 'three';
  
    export class OrbitControls extends EventDispatcher {
      constructor(object: Camera, domElement: HTMLElement);
  
      object: Camera;
      domElement: HTMLElement;
  
      enableDamping: boolean;
      dampingFactor: number;
      screenSpacePanning: boolean;
      maxPolarAngle: number;
  
      rotateSpeed: number;
      zoomSpeed: number;
      panSpeed: number;
  
      minDistance: number;
      maxDistance: number;
  
      enableZoom: boolean;
      enableRotate: boolean;
      enablePan: boolean;
  
      mouseButtons: { LEFT: MOUSE; MIDDLE: MOUSE; RIGHT: MOUSE };
      touchButtons: { ONE: number; TWO: number; THREE: number };
  
      update(): void;
      dispose(): void;
    }
  }
  