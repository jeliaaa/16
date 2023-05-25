function dropFunc() {
  var x = document.getElementById("navbarDrop");
  var burger = document.querySelector(".icon");
  //   if (screen.width <= 600) {
  //     if (x.className === "navbar") {
  //       x.className += " responsive";
  //       burger.innerHTML = "&#x2715;";
  //     } else {
  //       x.className = "navbar";
  //       burger.innerHTML = "&#9776;";
  //     }
  //   }
  // }
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}
