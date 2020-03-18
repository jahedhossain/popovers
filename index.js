const postionsElement = document.getElementsByClassName("postion");
const hoverElement = document.getElementsByClassName("hover");
const toggleElement = document.getElementsByClassName("toggle");

for (let index = 0; index < postionsElement.length; index++) {
  const singleHover = hoverElement[index];
  const singleToggle = toggleElement[index];
  const postionElement = postionsElement[index];

  postionElement.addEventListener("mouseover", event => {
    singleToggle.className = "displayBlock";
    if (event.screenX > 980) {
      singleToggle.style.cssText = "top: 0; left: -100%";
    }
  });
  postionElement.addEventListener("mouseout", event => {
    singleToggle.className = "displayNone";
  });
}
