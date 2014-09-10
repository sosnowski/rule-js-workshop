var rulejs = {
  loadTemplate: function(name, fn) {
    setTimeout(function(){
      fn('Quick ' + name + ' {{animal}} jumps over a lazy {{obstacle}}.');
    }, 300 + Math.random()*800);
  }
};