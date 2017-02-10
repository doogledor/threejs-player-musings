const ImageHotspot = require('./imageHotspot');


module.exports = class Hotspots {
  constructor(scene, camera, hotspotProps) {
    //Parse the hotspots
    this.hotspots = hotspotProps.map(hotspot => {
      switch (hotspot.type) {
        case "image":
          return new ImageHotspot(scene, camera, hotspot)
          break;
      }
    })
  }

  update(){
    for (var i = 0; i < this.hotspots.length; i++) {
      this.hotspots[i].update()
    }
  }
}
