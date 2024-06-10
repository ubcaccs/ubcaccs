<template>
    <div>
      <link rel="stylesheet" href="../../node_modules/@glidejs/glide/dist/css/glide.core.min.css">
  
      <div class="glide flex justify-between">

        <div class="glide__arrows text-off-white text-[30px] flex justify-between p-4" data-glide-el="controls">
          <button class="" data-glide-dir="<">
            &#8592;
          </button>
        </div>

        <div class="glide__track" data-glide-el="track">
          <ul class="glide__slides">
            <li v-for="eventName in eventNames" :key="eventName" class="glide__slide fixed-slide">
              <Event :name="eventName"></Event>
            </li>
          </ul>
        </div>

        <div class="glide__arrows text-off-white text-[30px] flex justify-between p-4" data-glide-el="controls">
          <button class="" data-glide-dir=">">
            &#8594;
          </button>
        </div>
      </div>

    </div>
  </template>
  
  <script>
  import Glide from "@glidejs/glide";
  import Event from "./Event.vue";
  
  export default {
    name: 'Carousel',
    components: {
      Event
    },
    data() {
      return {
        eventNames: ["Facebook", "Instagram", "Discord", "Hellooo", "Meow"]
      };
    },
    mounted() {
      new Glide(".glide", {
        type: 'slider',
        startAt: 1,
        perView: 4,
        focusAt: 'center',
        keyboard: true,
        gap: 20,
        rewind: false,
      }).mount();
    }
  };
  </script>
  
  <style scoped>
  .glide__slide {
    width: 350px !important;
    height: 400px !important;
    flex-shrink: 0;
  }
  
  .glide__slides {
    display: flex !important;
    flex-wrap: nowrap !important;
  }
  </style>
  