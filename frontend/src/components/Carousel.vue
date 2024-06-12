<template>
  <div>
    <link rel="stylesheet" href="../../node_modules/@glidejs/glide/dist/css/glide.core.min.css">

    <div class="glide px-4">
      <!-- ---------------  Slider  ---------------- -->
      <div class="glide__track px-8" data-glide-el="track">
        <ul class="glide__slides">
          <li v-for="event in events" :key="event.name" class="glide__slide fixed-slide">
            <Event :name="event.name" :description="event.description" :image="event.image"></Event>
          </li>
        </ul>
      </div>
      <!-- ---------------  Controls  ---------------- -->
      <div class="glide__arrows text-off-white text-[20px] flex justify-between p-4" data-glide-el="controls">
        <button class="" data-glide-dir="<">
          &#8592;
        </button>
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
      events: [
        {name: "Kick-off Event", 
        description: "We're thrilled to invite everyone to CS Departments new disability affinity group's upcoming kick-off event 🎊!", 
        image: "src/images/events/kickoff.jpg"},

        {name: "Bi-weekly Social", 
        description: "Join us this Thursday for an inclusive afternoon of socializing, puzzles, and snacks! 🧩🍿✨ AccessCS's goal is to foster a community where we can share our thoughts and experiences. Let's connect, puzzle, and snack together!", 
        image: "src/images/events/social.jpeg"},
        
        {name: "Event 1", 
        description: "Hi everyone! The location for our social has been updated to be a larger room, in ICCS 304. Here are the updated details:", 
        image: "src/images/events/social2.png"},

        {name: "Event 1", description: "This is a description of event 1", image: "src/images/events/year-end.jpeg"},
        {name: "Event 1", description: "This is a description of event 1", image: "src/images/events/year-end.jpeg"},
        {name: "Event 1", description: "This is a description of event 1", image: "src/images/events/year-end.jpeg"}
      ]
    };
  },
  mounted() {
    new Glide(".glide", {
      type: 'slider',
      startAt: 0,
      focusAt: 'center',
      perView: 1,
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
  gap: 0.5px;
}
</style>
