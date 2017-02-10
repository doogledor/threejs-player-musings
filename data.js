const D = {
  device: {

  },
  devicePixelRatio: Math.min(1.5, window.devicePixelRatio),
  dimensions: {
    width: 853,
    height: 480,
  },
  mouse: {
    x: 0,
    y: 0
  },
  playbackState: {

  },
  scene: {
    sphere: {
      radius: 6,
      lookAt: {
        x: 10,
        y: 10
      }
    },
    hotspots: [{
      type: "image",
      src:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Octopus2.jpg/220px-Octopus2.jpg",
      position: {
        x: 0.22322,
        y: 0.1212
      }
    }]
  }
}

module.exports = D;
