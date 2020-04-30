var images = [
  "images/a.jpg",
  "images/b.jpg",
  "images/c.jpg",
  "images/d.jpg",
  "images/e.jpg",
  "images/f.jpg",
  "images/g.jpg",
];

var image = $(".bkg");

function select_random(x) {
  y = x[Math.floor(Math.random() * images.length)];
  return y;
}

function display_image() {
  selected_image = select_random(images);
  $(".bkg").attr("src", selected_image);
}

$(document).ready(function () {
  display_image();
  $("laptoplogo").click(function () {
    display_image();
  });
});
