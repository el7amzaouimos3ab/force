declare module 'three/examples/jsm/loaders/GLTFLoader' {
    import { Object3D, Loader } from 'three';

    // Declaring the GLTFLoader class
    export class GLTFLoader extends Loader {
      constructor(manager?: any);

      load(
        url: string,
        onLoad: (gltf: { scene: Object3D; animations: any[]; scene: Object3D; }) => void,
        onProgress?: (event: ProgressEvent) => void,
        onError?: (event: ErrorEvent) => void
      ): void;
    }
}
