var patterns = [
  {
    "id": "pattern-dots",
    "x": "0",
    "y": "0",
    "width": "20",
    "height": "20",
    "patternUnits": "userSpaceOnUse",
    "elements": [
      { "type": "rect", "width": "100%", "height": "100%", "fill": "#437C94" },
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
      { "type": "rect", "width": "100%", "height": "100%", "fill": "#4C825C" },
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
      { "type": "rect", "width": "100%", "height": "100%", "fill": "#A36472" },
      { "type": "line", "x1": "0", "y1": "0", "x2": "10", "y2": "10", "stroke": "#ffffff", "stroke-width": "1" },
      { "type": "line", "x1": "10", "y1": "0", "x2": "0", "y2": "10", "stroke": "#A36472", "stroke-width": "1" }
    ]
  },
  {
    "id": "pattern-cubes",
    "x": "0",
    "y": "0",
    "width": "20",
    "height": "20",
    "patternUnits": "userSpaceOnUse",
    "elements": [
      {
        "type": "g", "id": "cube", "children": [
          { "type": "rect", "width": "100%", "height": "100%", "fill": "#89723F" },
          { "type": "path", "d": "M0 0l10 5v10l-10 -5z", "fill": "#ffffff" },
          { "type": "path", "d": "M20 0l-10 5v10l10 -5", "fill": "#ffffff" }
        ]
      },
      { "type": "use", "x": "5", "y": "5", "xlink:href": "#cube" },
      { "type": "use", "x": "-5", "y": "5", "xlink:href": "#cube" }
    ]
  },
  {
    "id": "pattern-hexagons",
    "x": "0",
    "y": "0",
    "width": "20",
    "height": "20",
    "patternUnits": "userSpaceOnUse",
    "elements": [
      { "type": "rect", "width": "100%", "height": "100%", "fill": "#CA4D3C" },
      { "type": "polygon", "points": "5,0 9,1.75 9,8.25 5,10 1,8.25 1,1.75", "fill": "#ffffff" }
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
      { "type": "rect", "width": "100%", "height": "100%", "fill": "#846A92" },
      { "type": "rect", "x": "0", "y": "0", "width": "5", "height": "10", "fill": "#ffffff" },
      { "type": "rect", "x": "10", "y": "5", "width": "5", "height": "10", "fill": "#ffffff" },
      { "type": "rect", "x": "20", "y": "10", "width": "5", "height": "10", "fill": "#ffffff" }
    ]
  },
  {
    "id": "pattern-zigzag",
    "x": "0",
    "y": "0",
    "width": "20",
    "height": "20",
    "patternUnits": "userSpaceOnUse",
    "elements": [
      { "type": "rect", "width": "100%", "height": "100%", "fill": "#4F7D7B" },
      { "type": "path", "d": "M0 10 L10 0 L20 10 L10 20 Z", "fill": "none", "stroke": "#ffffff", "stroke-width": "1" }
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
      { "type": "rect", "width": "100%", "height": "100%", "fill": "#AA643B" },
      { "type": "circle", "cx": "5", "cy": "5", "r": "3", "fill": "#ffffff" },
      { "type": "circle", "cx": "15", "cy": "15", "r": "3", "fill": "#ffffff" },
      { "type": "circle", "cx": "10", "cy": "10", "r": "3", "fill": "#ffffff" }
    ]
  },
  {
    "id": "pattern-checkerboard",
    "x": "0",
    "y": "0",
    "width": "20",
    "height": "20",
    "patternUnits": "userSpaceOnUse",
    "elements": [
      { "type": "rect", "width": "100%", "height": "100%", "fill": "#587B86" },
      { "type": "rect", "x": "0", "y": "0", "width": "6", "height": "6", "fill": "#ffffff" },
      { "type": "rect", "x": "10", "y": "10", "width": "6", "height": "6", "fill": "#ffffff" }
    ]
  },
  {
    "id": "pattern-triangles",
    "x": "0",
    "y": "0",
    "width": "20",
    "height": "20",
    "patternUnits": "userSpaceOnUse",
    "elements": [
      { "type": "rect", "width": "100%", "height": "100%", "fill": "#5F7D4F" },
      { "type": "polygon", "points": "5,0 10,10 0,10", "fill": "#ffffff" },
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
    "id": "pattern-cubes-bw",
    "x": "0",
    "y": "0",
    "width": "20",
    "height": "20",
    "patternUnits": "userSpaceOnUse",
    "elements": [
      {
        "type": "g", "id": "cube", "children": [
          { "type": "rect", "width": "100%", "height": "100%", "fill": "#ffffff" },
          { "type": "path", "d": "M0 0l10 5v10l-10 -5z", "fill": "#000000" },
          { "type": "path", "d": "M20 0l-10 5v10l10 -5", "fill": "#000000" }
        ]
      },
      
      { "type": "use", "x": "5", "y": "5", "xlink:href": "#cube" },
      { "type": "use", "x": "-5", "y": "5", "xlink:href": "#cube" }
    ]
  },
  {
    "id": "pattern-hexagons-bw",
    "x": "0",
    "y": "0",
    "width": "20",
    "height": "20",
    "patternUnits": "userSpaceOnUse",
    "elements": [
      { "type": "rect", "width": "100%", "height": "100%", "fill": "#ffffff" },
      { "type": "polygon", "points": "5,0 9,1.75 9,8.25 5,10 1,8.25 1,1.75", "fill": "#000000" }
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
    "id": "pattern-zigzag-bw",
    "x": "0",
    "y": "0",
    "width": "20",
    "height": "20",
    "patternUnits": "userSpaceOnUse",
    "elements": [
      { "type": "rect", "width": "100%", "height": "100%", "fill": "#ffffff" },
      { "type": "path", "d": "M0 10 L10 0 L20 10 L10 20 Z", "fill": "none", "stroke": "#000000", "stroke-width": "1" }
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
  },
  {
    "id": "pattern-checkerboard-bw",
    "x": "0",
    "y": "0",
    "width": "20",
    "height": "20",
    "patternUnits": "userSpaceOnUse",
    "elements": [
      { "type": "rect", "width": "100%", "height": "100%", "fill": "#ffffff" },
      { "type": "rect", "x": "0", "y": "0", "width": "6", "height": "6", "fill": "#000000" },
      { "type": "rect", "x": "10", "y": "10", "width": "6", "height": "6", "fill": "#000000" }
    ]
  },
  {
    "id": "pattern-triangles-bw",
    "x": "0",
    "y": "0",
    "width": "20",
    "height": "20",
    "patternUnits": "userSpaceOnUse",
    "elements": [
      { "type": "rect", "width": "100%", "height": "100%", "fill": "#ffffff" },
      { "type": "polygon", "points": "5,0 10,10 0,10", "fill": "#000000" },
      //{ "type": "polygon", "points": "15,10 20,0 10,0", "fill": "#000000" }
    ]
  }
];
var patternsMinimal = [
  {
    "id": "pattern-dots-minimal",
    "x": "0",
    "y": "0",
    "width": "10",
    "height": "10",
    "patternUnits": "userSpaceOnUse",
    "elements": [
      { "type": "rect", "width": "100%", "height": "100%", "fill": "#437C94" },
      { "type": "circle", "cx": "3", "cy": "3", "r": "1", "fill": "#FFFFFF" },
      { "type": "circle", "cx": "9", "cy": "9", "r": "1", "fill": "#FFFFFF" }
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
      { "type": "rect", "width": "100%", "height": "100%", "fill": "#4C825C" },
      { "type": "rect", "y": "2", "width": "5", "height": "1", "fill": "#FFFFFF" }
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
      { "type": "rect", "width": "100%", "height": "100%", "fill": "#A36472" },
      { "type": "line", "x1": "0", "y1": "0", "x2": "12", "y2": "12", "stroke": "#ffffff", "stroke-width": "1" },
      { "type": "line", "x1": "12", "y1": "0", "x2": "0", "y2": "12", "stroke": "#A36472", "stroke-width": "1" }
    ]
  },
  {
    "id": "pattern-cubes-minimal",
    "x": "0",
    "y": "0",
    "width": "15",
    "height": "15",
    "patternUnits": "userSpaceOnUse",
    "elements": [
      {
        "type": "g", "id": "cube", "children": [
          { "type": "rect", "width": "100%", "height": "100%", "fill": "#ffffff" },
          { "type": "path", "d": "M0 0l10 5v10l-10 -5z", "fill": "#89723F" },
          { "type": "path", "d": "M15 0l-10 5v10l10 -5", "fill": "#89723F" }
        ]
      },
      
      { "type": "use", "x": "3", "y": "3", "xlink:href": "#cube" },
      { "type": "use", "x": "-3", "y": "3", "xlink:href": "#cube" }
    ]
  },
  {
    "id": "pattern-hexagons-minimal",
    "x": "0",
    "y": "0",
    "width": "15",
    "height": "15",
    "patternUnits": "userSpaceOnUse",
    "elements": [
      { "type": "rect", "width": "100%", "height": "100%", "fill": "#CA4D3C" },
      { "type": "polygon", "points": "2,0 4,1.732 4,5.196 2,6.928 0,5.196 0,1.732", "fill": "#ffffff" }
    ]
  },
  {
    "id": "pattern-rectangles-minimal",
    "x": "0",
    "y": "0",
    "width": "20",
    "height": "20",
    "patternUnits": "userSpaceOnUse",
    "elements": [
      { "type": "rect", "width": "100%", "height": "100%", "fill": "#846A92" },
      { "type": "rect", "x": "0", "y": "0", "width": "2", "height": "5", "fill": "#ffffff" },
      { "type": "rect", "x": "10", "y": "5", "width": "2", "height": "5", "fill": "#ffffff" },
      { "type": "rect", "x": "20", "y": "10", "width": "2", "height": "5", "fill": "#ffffff" }
    ]
  },
  {
    "id": "pattern-zigzag-minimal",
    "x": "0",
    "y": "0",
    "width": "30",
    "height": "30",
    "patternUnits": "userSpaceOnUse",
    "elements": [
      { "type": "rect", "width": "100%", "height": "100%", "fill": "#4F7D7B" },
      { "type": "path", "d": "M0 15 L15 0 L30 15 L15 30 Z", "fill": "none", "stroke": "#ffffff", "stroke-width": "1" }
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
      { "type": "rect", "width": "100%", "height": "100%", "fill": "#AA643B" },
      { "type": "circle", "cx": "3", "cy": "3", "r": "1", "fill": "#ffffff" },
      { "type": "circle", "cx": "7", "cy": "7", "r": "1", "fill": "#ffffff" },
      { "type": "circle", "cx": "5", "cy": "5", "r": "1", "fill": "#ffffff" }
    ]
  },
  {
    "id": "pattern-checkerboard-minimal",
    "x": "0",
    "y": "0",
    "width": "15",
    "height": "15",
    "patternUnits": "userSpaceOnUse",
    "elements": [
      { "type": "rect", "width": "100%", "height": "100%", "fill": "#587B86" },
      { "type": "rect", "x": "0", "y": "0", "width": "3", "height": "3", "fill": "#ffffff" },
      { "type": "rect", "x": "6", "y": "6", "width": "3", "height": "3", "fill": "#ffffff" }
    ]
  },
  {
    "id": "pattern-triangles-minimal",
    "x": "0",
    "y": "0",
    "width": "15",
    "height": "15",
    "patternUnits": "userSpaceOnUse",
    "elements": [
      { "type": "rect", "width": "100%", "height": "100%", "fill": "#5F7D4F" },
      { "type": "polygon", "points": "2.5,0 5,5 0,5", "fill": "#ffffff" },
      //{ "type": "polygon", "points": "15,10 20,0 10,0", "fill": "#ffffff" }
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
    "id": "pattern-cubes-bw-minimal",
    "x": "0",
    "y": "0",
    "width": "15",
    "height": "15",
    "patternUnits": "userSpaceOnUse",
    "elements": [
      {
        "type": "g", "id": "cube", "children": [
          { "type": "rect", "width": "100%", "height": "100%", "fill": "#000000" },
          { "type": "path", "d": "M0 0l10 5v10l-10 -5z", "fill": "#ffffff" },
          { "type": "path", "d": "M15 0l-10 5v10l10 -5", "fill": "#ffffff" }
        ]
      },
      
      { "type": "use", "x": "3", "y": "3", "xlink:href": "#cube" },
      { "type": "use", "x": "-3", "y": "3", "xlink:href": "#cube" }
    ]
  },
  {
    "id": "pattern-hexagons-bw-minimal",
    "x": "0",
    "y": "0",
    "width": "15",
    "height": "15",
    "patternUnits": "userSpaceOnUse",
    "elements": [
      { "type": "rect", "width": "100%", "height": "100%", "fill": "#ffffff" },
      { "type": "polygon", "points": "2,0 4,1.732 4,5.196 2,6.928 0,5.196 0,1.732", "fill": "#000000" }
    ]
  },
  {
    "id": "pattern-rectangles-bw-minimal",
    "x": "0",
    "y": "0",
    "width": "20",
    "height": "20",
    "patternUnits": "userSpaceOnUse",
    "elements": [
      { "type": "rect", "width": "100%", "height": "100%", "fill": "#ffffff" },
      { "type": "rect", "x": "0", "y": "0", "width": "2", "height": "5", "fill": "#000000" },
      { "type": "rect", "x": "10", "y": "5", "width": "2", "height": "5", "fill": "#000000" },
      { "type": "rect", "x": "20", "y": "10", "width": "2", "height": "5", "fill": "#000000" }
    ]
  },
  {
    "id": "pattern-zigzag-bw-minimal",
    "x": "0",
    "y": "0",
    "width": "30",
    "height": "30",
    "patternUnits": "userSpaceOnUse",
    "elements": [
      { "type": "rect", "width": "100%", "height": "100%", "fill": "#ffffff" },
      { "type": "path", "d": "M0 15 L15 0 L30 15 L15 30 Z", "fill": "none", "stroke": "#000000", "stroke-width": "1" }
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
  },
  {
    "id": "pattern-checkerboard-bw-minimal",
    "x": "0",
    "y": "0",
    "width": "15",
    "height": "15",
    "patternUnits": "userSpaceOnUse",
    "elements": [
      { "type": "rect", "width": "100%", "height": "100%", "fill": "#ffffff" },
      { "type": "rect", "x": "0", "y": "0", "width": "3", "height": "3", "fill": "#000000" },
      { "type": "rect", "x": "6", "y": "6", "width": "3", "height": "3", "fill": "#000000" }
    ]
  },
  {
    "id": "pattern-triangles-bw-minimal",
    "x": "0",
    "y": "0",
    "width": "15",
    "height": "15",
    "patternUnits": "userSpaceOnUse",
    "elements": [
      { "type": "rect", "width": "100%", "height": "100%", "fill": "#ffffff" },
      { "type": "polygon", "points": "2.5,0 5,5 0,5", "fill": "#000000" },
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
      data.series[ i ].borderColor = pi_color_mode == 'bw' ? "#000000" : "#0F3248";
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
