const TextureLoader = (() => {

  const loader = new THREE.TextureLoader();
  loader.setCrossOrigin('anonymous')
  function load(src, callback) {
    loader.load(src, callback);
  }

  return {
    load
  }

})()

module.exports = TextureLoader
