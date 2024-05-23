
//Apex redwood extracted colors
var pine = ['#60BF78','#548C62','#36593F','#DBB46B','#7A7A7A'];
var peble = ['#79AEF2','#666C73','#F2C777','#D9B97E','#7A7A7A'];
var slate = ['#50BFBF','#667373','#F2C777','#D9B97E','#7A7A7A'];
var teal = ['#49736F','#9BBFBC','#50BFAB','#F2C777','#7A7A7A'];
var ocean = ['#274B59','#42778C','#639AA6','#F2C777','#7A7A7A'];
var lilac = ['#85A0F2','#68718C','#858DA6','#F2C777','#7A7A7A'];
var rose = ['#F26B8F','#734551','#A66879','#DBB46B','#7A7A7A'];
var sienna = ['#F2C777','#7A7A7A','#D9A76A','#733B27','#A6583C'];
var plum = ['#D97ECA','#4F3F59','#7E688C','#F2C777','#7A7A7A'];
var sky = ['#065F73','#248EA6','#29C7D9','#F2C777','#7A7A7A'];
//Adobe kuler random
var kuler1 = ['#DB9140','#C940DB','#8EDB40','#40B1DB','#6D8654'];

var colorPalette = pine;
var patternsMinimal = [
  {
    "id": "pattern-dots-minimal",
    "x": "0",
    "y": "0",
    "width": "10",
    "height": "10",
    "patternUnits": "userSpaceOnUse",
    "elements": [
      { "type": "rect", "width": "100%", "height": "100%", "fill": "#FFFFFF" },
      { "type": "circle", "cx": "3", "cy": "3", "r": "1", "fill": colorPalette[0] },
      { "type": "circle", "cx": "9", "cy": "9", "r": "1", "fill": colorPalette[0] }
    ]
  },
  {
    "id": "pattern-stripes-minimal",
    "x": "0",
    "y": "0",
    "width": "10",
    "height": "10",
    "patternUnits": "userSpaceOnUse",
    "elements": [
      { "type": "rect", "width": "100%", "height": "100%", "fill": "#FFFFFF" },
      { "type": "rect", "y": "2", "width": "5", "height": "1", "fill": colorPalette[1] }
    ]
  },
  {
    "id": "pattern-diagonal-stripes-minimal",
    "x": "0",
    "y": "0",
    "width": "12",
    "height": "12",
    "patternUnits": "userSpaceOnUse",
    "elements": [
      { "type": "rect", "width": "100%", "height": "100%", "fill": "#FFFFFF" },
      { "type": "line", "x1": "0", "y1": "0", "x2": "12", "y2": "12", "stroke": colorPalette[2], "stroke-width": "1" },
      { "type": "line", "x1": "12", "y1": "0", "x2": "0", "y2": "12", "stroke": "#FFFFFF", "stroke-width": "1" }
    ]
  },
  {
    "id": "pattern-rectangles-minimal",
    "x": "0",
    "y": "0",
    "width": "15",
    "height": "15",
    "patternUnits": "userSpaceOnUse",
    "elements": [
      { "type": "rect", "width": "100%", "height": "100%", "fill": "#ffffff" },
      { "type": "rect", "x": "0", "y": "0", "width": "2", "height": "5", "fill": colorPalette[3] },
      { "type": "rect", "x": "6", "y": "6", "width": "2", "height": "5", "fill": colorPalette[3] }//,
      //{ "type": "rect", "x": "12", "y": "12", "width": "2", "height": "5", "fill": colorPalette[3] }
    ]
  },
  {
    "id": "pattern-polka-minimal",
    "x": "0",
    "y": "0",
    "width": "15",
    "height": "15",
    "patternUnits": "userSpaceOnUse",
    "elements": [
      { "type": "rect", "width": "100%", "height": "100%", "fill": "#ffffff" },
      { "type": "circle", "cx": "3", "cy": "3", "r": "1", "fill": colorPalette[4] },
      { "type": "circle", "cx": "7", "cy": "7", "r": "1", "fill": colorPalette[4] },
      { "type": "circle", "cx": "5", "cy": "5", "r": "1", "fill": colorPalette[4] }
    ]
  }
];
var patternsBwMinimal = [
  {
    "id": "pattern-dots-bw-minimal",
    "x": "0",
    "y": "0",
    "width": "10",
    "height": "10",
    "patternUnits": "userSpaceOnUse",
    "elements": [
      { "type": "rect", "width": "100%", "height": "100%", "fill": "#ffffff" },
      { "type": "circle", "cx": "3", "cy": "3", "r": "1", "fill": "#000000" },
      { "type": "circle", "cx": "9", "cy": "9", "r": "1", "fill": "#000000" }
    ]
  },
  {
    "id": "pattern-stripes-bw-minimal",
    "x": "0",
    "y": "0",
    "width": "10",
    "height": "10",
    "patternUnits": "userSpaceOnUse",
    "elements": [
      { "type": "rect", "width": "100%", "height": "100%", "fill": "#ffffff" },
      { "type": "rect", "y": "2", "width": "5", "height": "1", "fill": "#000000" }
    ]
  },
  {
    "id": "pattern-diagonal-stripes-bw-minimal",
    "x": "0",
    "y": "0",
    "width": "12",
    "height": "12",
    "patternUnits": "userSpaceOnUse",
    "elements": [
      { "type": "rect", "width": "100%", "height": "100%", "fill": "#ffffff" },
      { "type": "line", "x1": "0", "y1": "0", "x2": "12", "y2": "12", "stroke": "#000000", "stroke-width": "1" },
      { "type": "line", "x1": "12", "y1": "0", "x2": "0", "y2": "12", "stroke": "#ffffff", "stroke-width": "1" }
    ]
  },
  {
    "id": "pattern-rectangles-bw-minimal",
    "x": "0",
    "y": "0",
    "width": "15",
    "height": "15",
    "patternUnits": "userSpaceOnUse",
    "elements": [
      { "type": "rect", "width": "100%", "height": "100%", "fill": "#ffffff" },
      { "type": "rect", "x": "0", "y": "0", "width": "2", "height": "5", "fill": "#000000" },
      { "type": "rect", "x": "6", "y": "6", "width": "2", "height": "5", "fill": "#000000" }//,
      //{ "type": "rect", "x": "12", "y": "12", "width": "2", "height": "5", "fill": "#000000" }
    ]
  },
  {
    "id": "pattern-polka-bw-minimal",
    "x": "0",
    "y": "0",
    "width": "15",
    "height": "15",
    "patternUnits": "userSpaceOnUse",
    "elements": [
      { "type": "rect", "width": "100%", "height": "100%", "fill": "#ffffff" },
      { "type": "circle", "cx": "3", "cy": "3", "r": "1", "fill": "#000000" },
      { "type": "circle", "cx": "7", "cy": "7", "r": "1", "fill": "#000000" },
      { "type": "circle", "cx": "5", "cy": "5", "r": "1", "fill": "#000000" }
    ]
  }
];
var patterns = [
  {
    "id": "pattern-dots",
    "x": "0",
    "y": "0",
    "width": "20",
    "height": "20",
    "patternUnits": "userSpaceOnUse",
    "elements": [
      { "type": "rect", "width": "100%", "height": "100%", "fill": colorPalette[0] },
      { "type": "circle", "cx": "5", "cy": "5", "r": "3", "fill": "#FFFFFF" },
      { "type": "circle", "cx": "15", "cy": "15", "r": "3", "fill": "#FFFFFF" }
    ]
  },
  {
    "id": "pattern-stripes",
    "x": "0",
    "y": "0",
    "width": "10",
    "height": "10",
    "patternUnits": "userSpaceOnUse",
    "elements": [
      { "type": "rect", "width": "100%", "height": "100%", "fill": colorPalette[1] },
      { "type": "rect", "y": "5", "width": "10", "height": "2", "fill": "#FFFFFF" }
    ]
  },
  {
    "id": "pattern-diagonal-stripes",
    "x": "0",
    "y": "0",
    "width": "10",
    "height": "10",
    "patternUnits": "userSpaceOnUse",
    "elements": [
      { "type": "rect", "width": "100%", "height": "100%", "fill": colorPalette[2] },
      { "type": "line", "x1": "0", "y1": "0", "x2": "10", "y2": "10", "stroke": "#ffffff", "stroke-width": "1" },
      { "type": "line", "x1": "10", "y1": "0", "x2": "0", "y2": "10", "stroke": colorPalette[2], "stroke-width": "1" }
    ]
  },
  {
    "id": "pattern-rectangles",
    "x": "0",
    "y": "0",
    "width": "30",
    "height": "30",
    "patternUnits": "userSpaceOnUse",
    "elements": [
      { "type": "rect", "width": "100%", "height": "100%", "fill": colorPalette[3] },
      { "type": "rect", "x": "0", "y": "0", "width": "5", "height": "10", "fill": "#ffffff" },
      { "type": "rect", "x": "10", "y": "5", "width": "5", "height": "10", "fill": "#ffffff" },
      { "type": "rect", "x": "20", "y": "10", "width": "5", "height": "10", "fill": "#ffffff" }
    ]
  },
  {
    "id": "pattern-polka",
    "x": "0",
    "y": "0",
    "width": "20",
    "height": "20",
    "patternUnits": "userSpaceOnUse",
    "elements": [
      { "type": "rect", "width": "100%", "height": "100%", "fill": colorPalette[4] },
      { "type": "circle", "cx": "5", "cy": "5", "r": "3", "fill": "#ffffff" },
      { "type": "circle", "cx": "15", "cy": "15", "r": "3", "fill": "#ffffff" },
      { "type": "circle", "cx": "10", "cy": "10", "r": "3", "fill": "#ffffff" }
    ]
  }
];
var patternsBw = [
  {
    "id": "pattern-dots-bw",
    "x": "0",
    "y": "0",
    "width": "20",
    "height": "20",
    "patternUnits": "userSpaceOnUse",
    "elements": [
      { "type": "rect", "width": "100%", "height": "100%", "fill": "#ffffff" },
      { "type": "circle", "cx": "5", "cy": "5", "r": "3", "fill": "#000000" },
      { "type": "circle", "cx": "15", "cy": "15", "r": "3", "fill": "#000000" }
    ]
  },
  {
    "id": "pattern-stripes-bw",
    "x": "0",
    "y": "0",
    "width": "10",
    "height": "10",
    "patternUnits": "userSpaceOnUse",
    "elements": [
      { "type": "rect", "width": "100%", "height": "100%", "fill": "#ffffff" },
      { "type": "rect", "y": "5", "width": "10", "height": "2", "fill": "#000000" }
    ]
  },
  {
    "id": "pattern-diagonal-stripes-bw",
    "x": "0",
    "y": "0",
    "width": "10",
    "height": "10",
    "patternUnits": "userSpaceOnUse",
    "elements": [
      { "type": "rect", "width": "100%", "height": "100%", "fill": "#ffffff" },
      { "type": "line", "x1": "0", "y1": "0", "x2": "10", "y2": "10", "stroke": "#000000", "stroke-width": "1" },
      { "type": "line", "x1": "10", "y1": "0", "x2": "0", "y2": "10", "stroke": "#ffffff", "stroke-width": "1" }
    ]
  },
  {
    "id": "pattern-rectangles-bw",
    "x": "0",
    "y": "0",
    "width": "30",
    "height": "30",
    "patternUnits": "userSpaceOnUse",
    "elements": [
      { "type": "rect", "width": "100%", "height": "100%", "fill": "#ffffff" },
      { "type": "rect", "x": "0", "y": "0", "width": "5", "height": "10", "fill": "#000000" },
      { "type": "rect", "x": "10", "y": "5", "width": "5", "height": "10", "fill": "#000000" },
      { "type": "rect", "x": "20", "y": "10", "width": "5", "height": "10", "fill": "#000000" }
    ]
  },
  {
    "id": "pattern-polka-bw",
    "x": "0",
    "y": "0",
    "width": "20",
    "height": "20",
    "patternUnits": "userSpaceOnUse",
    "elements": [
      { "type": "rect", "width": "100%", "height": "100%", "fill": "#ffffff" },
      { "type": "circle", "cx": "5", "cy": "5", "r": "3", "fill": "#000000" },
      { "type": "circle", "cx": "15", "cy": "15", "r": "3", "fill": "#000000" },
      { "type": "circle", "cx": "10", "cy": "10", "r": "3", "fill": "#000000" }
    ]
  }
];

function createPatterns(pi_pattern_array,pi_defs){
  pi_pattern_array.forEach(pattern => {
    const patternElement = document.createElementNS("http://www.w3.org/2000/svg", "pattern");
    patternElement.setAttribute("id", pattern.id);
    console.log(pattern.id);
    patternElement.setAttribute("x", pattern.x);
    patternElement.setAttribute("y", pattern.y);
    patternElement.setAttribute("width", pattern.width);
    patternElement.setAttribute("height", pattern.height);
    patternElement.setAttribute("patternUnits", pattern.patternUnits);
  
    pattern.elements.forEach(el => {
      const element = document.createElementNS("http://www.w3.org/2000/svg", el.type);
      for (const [key, value] of Object.entries(el)) {
        if (key !== 'type' && key !== 'children') {
          element.setAttribute(key, value);
        }
      }
      if (el.children) {
        el.children.forEach(child => {
          const childElement = document.createElementNS("http://www.w3.org/2000/svg", child.type);
          for (const [key, value] of Object.entries(child)) {
            if (key !== 'type') {
              childElement.setAttribute(key, value);
            }
          }
          element.appendChild(childElement);
        });
      }
      patternElement.appendChild(element);
    });
  
    pi_defs.append(patternElement);
  });
  console.log('patterns created');
}


function addPatterns(pi_options, pi_color_mode){
  pi_options.dataFilter = function (data) {
    for (var i = 0; i < data.series.length; i++) {
      var color = data.series[ i ].color;
      data.series[ i ].fill = 'url(#pattern-dots-bw)';
      if(pi_color_mode == 'bold-color'){
          data.series[ i ].color = "url(#" + patterns[i].id + ")";
      }
      if(pi_color_mode == 'bold-bw'){
          data.series[ i ].color = "url(#" + patternsBw[i].id + ")";
      }
      if(pi_color_mode == 'minimal-color'){
          data.series[ i ].color = "url(#" + patternsMinimal[i].id + ")";
      }
      if(pi_color_mode == 'minimal-bw'){
          data.series[ i ].color = "url(#" + patternsBwMinimal[i].id + ")";
      }
      data.series[ i ].borderColor = pi_color_mode == 'bw' ? "#000000" : "#29332E";
    }
    return data;
  };
  return pi_options;
}

document.addEventListener('DOMContentLoaded', function() {
    // Function to be executed when <defs> elements are found
    function onDefsFound() {
        console.log('<defs> elements found!');
        var defs = $('defs');
        createPatterns(patterns,defs);
        createPatterns(patternsBw,defs);
        createPatterns(patternsMinimal,defs);
        createPatterns(patternsBwMinimal,defs);
    }

    // Create an instance of MutationObserver
    var observer = new MutationObserver(function(mutations, observer) {
        // Check if <defs> elements are present in the DOM
        if (document.querySelector('defs')) {
            onDefsFound();
            // Disconnect the observer once the <defs> elements are found
            observer.disconnect();
        }
    });

    // Configuration of the observer
    var config = {
        childList: true,      // Observe direct children
        subtree: true         // Observe all descendants
    };

    // Start observing the entire document
    observer.observe(document, config);

    // Check initially if <defs> elements are already in the DOM
    if (document.querySelector('defs')) {
        onDefsFound();
        observer.disconnect();
    }
});
