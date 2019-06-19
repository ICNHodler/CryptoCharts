import { loadingIcon } from "./loading_icon";
function loading(chartid, userinput){
  var loadingicon = loadingIcon();
  if (userinput.loading_indicator.colors){
    loadingicon = loadingIcon(userinput.loading_indicator.colors);
  }
  var loadingtext = `<div class='${chartid} cryptochart_loading' title="loading chart...">${loadingicon}</div>`;
  document.querySelectorAll("#" + chartid)[0].classList.add("cryptochart-container");
  document.querySelectorAll("#" + chartid)[0].innerHTML = loadingtext;
}
export { loading };
