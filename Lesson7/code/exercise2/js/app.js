(function (global, documeent) {
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

  function clearCanvas () {
      var canvas = document.getElementById('canvas');
      if (canvas.children.length) {
          for (var i = 0; i < canvas.children.length; i++) {
              canvas.removeChild(canvas.children[i]);
          }
      }
  }

  function render (model) {
      if (model != null) {
          var title = document.getElementById('title');
          title.innerHTML = model.title;
          clearCanvas();
          drawBarChar(model.dataset.map(function (d) {
              return d.value;
          }));
      }
  }

  function getData () {
      var scriptId = 'getDataForChartScript'
      var script = document.getElementById(scriptId);
      if (script != null) {
          script.parentNode.removeChild(script);
      }
      var connectionUrl = 'http://js-workshop-lesson7.herokuapp.com/data?n=15&callback=App.render';
      script = document.createElement('script');
      script.src = connectionUrl;
      script.id = scriptId;
      document.getElementsByTagName('body')[0].appendChild(script);
  }

  function init () {
      var updateChartButton = document.getElementById('updateChart');
      updateChartButton.addEventListener('click', function (ev) {
          getData();
      }, true);
  }

  global.App = {
    drawBarChart: drawBarChar,
    getData: getData,
    render: render,
    init: init
  };
})(window, document);

App.init();
