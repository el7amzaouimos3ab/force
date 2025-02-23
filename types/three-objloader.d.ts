// types/three-objloader.d.ts

declare module 'three/examples/jsm/loaders/OBJLoader' {
    import { Object3D, Loader } from 'three';
  
    // Declaring the OBJLoader class
    export class OBJLoader extends Loader {
      constructor(manager?: any);
  
      load(
        url: string,
        onLoad: (object: Object3D) => void,
        onProgress?: (event: ProgressEvent) => void,
        onError?: (event: ErrorEvent) => void
      ): void;
    }
  }
  