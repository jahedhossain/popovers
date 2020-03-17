const hoverElement = document.getElementsByClassName("hover");
const toggleElement = document.getElementsByClassName("toggle");

for (let index = 0; index < hoverElement.length; index++) {
  const singleHover = hoverElement[index];
  const singleToggle = toggleElement[index];

  singleHover.addEventListener("mouseover", event => {
    singleToggle.className = "displayBlock";
    if (event.screenX > 980) {
      singleToggle.style.cssText = "top: 0; left: -100%";
    }
    // console.log(event.screenX);
  });
  singleHover.addEventListener("mouseout", event => {
    singleToggle.className = "displayNone";
  });
}

// hoverElement.addEventListener("on", e => {
//   const x = e.screenX;
//   console.log(x);
// });
