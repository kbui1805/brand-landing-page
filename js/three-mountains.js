
window.addEventListener('scroll', throttle(parallax, 14));

window.addEventListener('scroll', throttle(parallax_bg, 14));

function throttle(fn, wait) {
  var time = Date.now();
  return function() {
    if ((time + wait - Date.now()) < 0) {
      fn();
      time = Date.now();
    }
  }
};

function parallax() {
  var scrolled = window.pageYOffset;
  var parallax = document.querySelector(".parallax");
  // You can adjust the 0.4 to change the speed
	var coords = (scrolled * -.3) + 'px'
  parallax.style.transform = 'translateY(' + coords + ')';
};

function parallax_bg() {
    var scrolled = window.pageYOffset;
    var parallax = document.querySelector(".parallax2");
    // You can adjust the 0.4 to change the speed
      var coords = (scrolled * -.1) + 'px'
    parallax.style.transform = 'translateY(' + coords + ')';
  };