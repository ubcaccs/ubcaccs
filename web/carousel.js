import "https://ubcaccs.ddev.site/css/output.css";
import Glide from "@glidejs/glide";
// Required Core Stylesheet
import "@glidejs/glide/src/assets/sass/glide.core";

// Optional Theme Stylesheet
import "@glidejs/glide/src/assets/sass/glide.theme";

const hi = require("@glidejs/glide");
require("@glidejs/glide/src/assets/sass/glide.core");
require("@glidejs/glide/src/assets/sass/glide.theme");

console.log(Glide);

var glide = new Glide(".glide", {
  type: "carousel",
  focusAt: "center",
  perView: 3
});
glide.mount();
