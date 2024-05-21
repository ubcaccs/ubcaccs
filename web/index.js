import Glide from "https://cdn.jsdelivr.net/npm/@glidejs/glide@3.4.1/dist/glide.esm.js";

const glide = new Glide(".glide", {
    type: "carousel",
    focusAt: "center",
    perView: 3
});

glide.mount();