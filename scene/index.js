const ImageLoader = require('./utils/ImageLoader');
const Sphere = require('./sphere');
const Hotspots = require('./hotspots');
const createControls = require('orbit-controls');
const assign = require('lodash/assign');

module.exports = class Scene {
  constructor(targetCanvas, videoNode, props) {
    this.props = props
    this.sceneProps = this.props.scene
    const dpr = props.dpr
    this.renderer = new THREE.WebGLRenderer(assign({
      canvas: targetCanvas,
      alpha: false,
      stencil: false,
      antialias: false,
    }, props.render));
    this.renderer.setPixelRatio(dpr);

    this.camera = new THREE.PerspectiveCamera(45, 1, 0.01, 1000);
    this.target = new THREE.Vector3();

    this.scene = new THREE.Scene();

    this.controls = createControls(assign({
      rotateSpeed: 0.2,
      zoomSpeed: 0.01,
      pinchSpeed: 0.01,
      phi: 1.28,
      distance: 3,
      distanceBounds: [1, 5]
    }, props.controls));


    this.sphere = new Sphere(videoNode, this.scene, this.sceneProps.sphere)
    this.hotspots = new Hotspots(this.scene, this.camera, this.sceneProps.hotspots)


    const {width, height} = this.props.dimensions
    this.resize(width, height)
  }

  updateProjectionMatrix(width, height) {
    const aspect = width / height;
    this.controls.update();
    this.camera.position.fromArray(this.controls.position);
    this.camera.up.fromArray(this.controls.up);
    this.camera.lookAt(this.target.fromArray(this.controls.direction));

    this.hotspots.update()
    this.camera.aspect = aspect;
    this.camera.updateProjectionMatrix();
  }

  render(dt) {
    this.updateProjectionMatrix(this.width, this.height)
    this.renderer.render(this.scene, this.camera);
  }

  resize(width, height) {
    /*if (isIOS) {
      // fix landscape bug with iOS
      width++;
      height++;
    }*/
    this.width = width
    this.height = width
    this.renderer.setSize(width, height);
    this.updateProjectionMatrix(width, height);
  }
}
