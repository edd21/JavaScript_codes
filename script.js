function createParagraph() {
  let para = document.createElement("p");
  para.textContent = "You clicked the button!";
  document.body.appendChild(para);
}

function createText() {
  let para = document.createElement("p");
  // para.textContent = "Tu texto: " + text;

  document.body.appendChild(para);
  let text = prompt("Enter a text");
  para.textContent = "Tu texto: ".concat(text);
}

function changeStyle() {
  const btn1 = document.getElementById("btn1");
  btn1.setAttribute("style", "color: yellow;");
}
// const buttons = document.querySelectorAll("button");

// for (let i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener("click", createParagraph);
// }

//const btn1 = document.getElementById("btn1");
// const btn2 = document.getElementById("btn2");

btn1.addEventListener("click", changeStyle);
// btn2.addEventListener("click", createText);