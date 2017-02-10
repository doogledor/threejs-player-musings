global.THREE = require('three')
const createLoop = require('raf-loop');
const CreateApp = require('./scene');

module.exports = class Player {
  constructor(targetNode, videoNode, props) {
    this.props = props
    this.scene = new CreateApp(targetNode, videoNode, this.props)

    const loop = createLoop(this.render.bind(this))
    loop.start()
  }


  _updateProps(oldProps, newProps) {
    Object.keys(oldProps).forEach((key) => {
      if (typeof oldProps[key] === 'object') {
        return this._updateProps(oldProps[key], newProps[key]);
      }
      if (newProps[key]) {
        console.log(newProps[key] , newProps[key]);
        if (newProps[key] !== newProps[key]) {
          oldProps[key] = newProps[key];
        }
      }
    });
  }

  setProps(newProps) {
    this._updateProps(this.props, newProps)
  }


  render() {
    this.scene.render()
  }
}
