function removeFadeOut(el, speed) {
  var seconds = speed / 1000;
  el.style.transition = "opacity " + seconds + "s ease";
  el.style.opacity = 0;
  setTimeout(function() {
    el.parentNode.removeChild(el);
  }, speed);
}
export { removeFadeOut };
