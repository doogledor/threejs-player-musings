const assign = require('lodash/assign');
const proxy = require('proxy-observe')

module.exports = class BaseHotspot {
  constructor(scene, camera, props) {
    this.props = props
    this.scene = scene
    this.camera = camera
    this.proxy = Object.deepObserve(this.props, this.onPropsUpdated.bind(this))
  }

  create(geometry, material) {
    this.fixGeometry(geometry)

    this.object3D = new THREE.Object3D();
    this.object3D.add(new THREE.Mesh(geometry, material));
    this.scene.add(this.object3D)
  }

  fixGeometry(geo) {
    geo.computeBoundingBox();
    geo.center();
  }

  onPropsUpdated(newProps) {
    console.log(newProps);
  }

  update() {
    /*if(this.object3D){
      this.object3D.lookAt(new THREE.Vector3(0,0,0))
    }*/
  }
}
