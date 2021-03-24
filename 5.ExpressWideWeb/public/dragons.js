red = true;
setInterval(() => {
  if (red) {
    $("body").css("background-color", "white");
  } else {
    $("body").css("background-color", "red");
  }
  red = !red;
}, 3000);

window.onclick = function () {
  console.log("Hello, you dabber clicker");
};

//Toggle div when button is clicked
$(document).on("click", function () {
  console.log("Hello there from Jquery");
});

const dragonImage = `<img id="dragon-img" src="https://cdn.pixabay.com/photo/2014/01/05/01/19/dragon-238931_1280.jpg" alt="dragon">`;
$(document).on("click", (event) => {
  $("#1").append(dragonImage);
  setTimeout(() => {
    $("#dragon-img").remove();
  }, 1000);
});
