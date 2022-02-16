const buttons  = document.querySelectorAll("button");

const buttonRipple = (e)=>{
  e.preventDefault();
  e.currentTarget.clickQuantity++;
  const diameter = Math.max(e.currentTarget.clientWidth,e.currentTarget.clientHeight);
  let x = null;
  let y = null;
  e.clientX == undefined ? x = e.changedTouches[0].clientX : x = e.clientX;
  e.clientY == undefined ? y = e.changedTouches[0].clientY : y = e.clientY;
  x-=e.currentTarget.offsetLeft;
  y-=e.currentTarget.offsetTop;
  const r = diameter/2;
  const span = document.createElement("span");
  span.style = `
        width: ${diameter}px;
        height: ${diameter}px;
        top: ${y-r}px;
        left: ${x-r}px;
                `;
  span.className = "ripple";
  e.currentTarget.appendChild(span);

}

const removeRipple = (e)=>{
  e.preventDefault();
  const span = e.currentTarget.querySelectorAll("span[class='ripple']");
  for(let i=0;i<e.currentTarget.clickQuantity;i++){
    if(span.length>0){
      myspan = span[span.length-1-i];
      myspan.style.opacity = 0;
      setTimeout((myspan)=>{
        myspan.remove();
      },600,myspan);
    }
  }
  e.currentTarget.clickQuantity=0;
}

for(button of buttons){
  button.clickQuantity = 0;
  button.addEventListener("pointerdown",buttonRipple);
  button.addEventListener("pointerleave",removeRipple);
  button.addEventListener("pointercancel",removeRipple);
  button.addEventListener("pointerup",removeRipple);
}
/* Created by jagata */
