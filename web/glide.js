import Glide from "https://cdn.jsdelivr.net/npm/@glidejs/glide@3.4.1/dist/glide.esm.js";

var glide = new Glide(".glide", {
    type: 'sliders',
	startAt: 0,
	perView: 4,
	focusAt: 'center',
	keyboard: true,
	gap: 20
  });
  glide.mount();