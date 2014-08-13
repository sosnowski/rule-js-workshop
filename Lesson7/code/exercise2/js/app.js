(function (global) {
  'use strict';

  function countHeight (height, maxHeight, canvasHeight) {
    return canvasHeight * height / maxHeight;
  }

  function drawBarChar (dataset) {
    var canvas = document.getElementById('canvas');
    var canvasHeight = canvas.clientHeight;
    var canvasWidth = canvas.clientWidth;

    var maxHeight = Math.max.apply({}, dataset);
    var barWidth = (canvasWidth - (dataset.length * 10)) / dataset.length;

    var barChart = document.createDocumentFragment();

    dataset.forEach(function (height, i) {
      var div = document.createElement('div');
      div.className = 'bar';
      div.style.height = countHeight(height, maxHeight, canvasHeight) + 'px';
      div.style.width = barWidth + 'px';
      div.style.left = barWidth * i + (i * 10) + 'px';

      barChart.appendChild(div);
    });

    canvas.appendChild(barChart);
  }

  function render (model) {

  }

  function getData () {

  }

  global.App = {
    drawBarChart: drawBarChar,
    getData: getData,
    render: render
  };
})(window);
