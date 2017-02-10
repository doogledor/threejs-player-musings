const assign = require('lodash/assign');

module.exports = class Sphere {
  constructor(video, scene, optns = {}) {

    const options = assign({
      radius:150,
    }, optns)

    var videoTexture = new THREE.VideoTexture(video);
    videoTexture.minFilter = THREE.LinearFilter;
    videoTexture.magFilter = THREE.LinearFilter;
    var geometry = new THREE.SphereGeometry(options.radius, 150, 150);
    geometry.scale(-1, 1, 1);
    var material = new THREE.MeshBasicMaterial({ map:videoTexture });
    this.mesh = new THREE.Mesh(geometry, material);
    scene.add(this.mesh);
  }
}
