<template>
  <div>
    <link rel="stylesheet" href="../../node_modules/@glidejs/glide/dist/css/glide.core.min.css">

    <div class="glide px-4">
      <!-- ---------------  Slider  ---------------- -->
      <div class="glide__track px-8" data-glide-el="track">
        <ul class="glide__slides">
          <li v-for="event in events" :key="event.title" class="glide__slide fixed-slide">
            <Event :name="event.title" :description="event.description" :image="event.eventImage[0].url"></Event>
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
      events: []
    };
  },
  created() {
    this.fetchGraphQLData().then(() => {
      this.initializeGlide();
    });
  },

  methods: {
    async fetchGraphQLData() {
      const token = import.meta.env.VITE_GRAPHQL_TOKEN
      const query = `
      {
        entries (section: "events", limit: 2, orderBy: "date DESC") {
            title
            ... on events_events_Entry {
            description
            eventImage {
                url @transform (width: 350)
            }
            beginTime
            endTime
                rsvpRequired
            rsvpLink
            }
        }
      }
      `;

      try {
        const response = await fetch('https://ubcaccs.ddev.site/api', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': token,
          },
          body: JSON.stringify({ query }),
        });

        const result = await response.json();
        const data = result.data.entries;
        this.events = data;
        console.log(data)
        console.log(this.events)

      } catch (error) {
        console.error('Error fetching data:', error);
      }
   },
   initializeGlide() {
      this.$nextTick(() => {
        new Glide(".glide", {
          type: 'slider',
          startAt: 0,
          focusAt: 'center',
          perView: 2,
          keyboard: true,
          gap: 20,
          rewind: false,
        }).mount();
      });
    }
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
