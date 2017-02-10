const cloneDeep = require('lodash/cloneDeep');
const Data = require('./data');
const Player = require('./360player');

if (document.body) {
    _init();
} else {
    window.addEventListener('DOMContentLoaded', _init);
}

function _init() {
    const player = new Player(
        document.querySelector('#three'),
        document.querySelector('#video'),
        Data
    )

    const newProps = cloneDeep(Data)
    newProps.scene.hotspots[0].position = {x:0.3, y:0.4}

    player.setProps(newProps)
}
