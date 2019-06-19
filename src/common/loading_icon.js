function loadingIcon(usercolors) {
  var colors = null;
  //var colors=["blue","orange","pink","purple"];
  if (usercolors){
    colors = usercolors;
  }
  function getColour(index) {
    var color = "url(#grad2)";
    if (colors) {
      color = colors[index];
    }
    return color;
  }
  var bars = [
    { x: 0, y: 50, height: 40, dur: 0 },
    { x: 30, y: 40, height: 60, dur: 0.1 },
    { x: 60, y: 30, height: 80, dur: 0.2 },
    { x: 90, y: 20, height: 100, dur: 0.3 }
  ];
  function createBars() {
    var str = "";
    bars.forEach(function(obj, index) {
      str += `<rect width="15" x="${obj.x}" height="${obj.height}" y="${
        obj.y
      }" rx="3" fill="${getColour(index)}" id="bar${index}">${animateHeight(
        obj.dur
      )}</rect>`;
    });
    return str;
  }
  function animateHeight(start) {
    return `<animate
        attributeName="height"
        begin="${start}s"
        dur="1s"
        values="120;110;100;90;80;70;60;50;40;140;120"
        calcMode="linear"
        repeatCount="indefinite"
      />
      <animate
        attributeName="y"
        begin="${start}s"
        dur="1s"
        values="10;15;20;25;30;35;40;45;50;0;10"
        calcMode="linear"
        repeatCount="indefinite"
      />`;
  }
  var svgtext = `<svg
    viewBox="0 0 105 140"
    xmlns="http://www.w3.org/2000/svg"
  ><defs>
      <linearGradient id="grad2" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style="stop-color:#1EC198;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#265CDD;stop-opacity:1" />
      </linearGradient>
    </defs>
  ${createBars()}
  </svg>`;
  return svgtext;
}
export { loadingIcon };
