const BaseHotspot = require('./baseHotspot');
const Loader = require('../utils/Loader');

module.exports = class ImageHotspot extends BaseHotspot {
  constructor(scene,camera, props) {
    super(scene,camera, props)

    Loader.load(props.src, (texture) => {
      this.create(
        new THREE.PlaneGeometry(1, 1, 2, 2),
        new THREE.MeshBasicMaterial({ map: texture })
      )
    })
  }
}
