<template>
  <div>
    <div class="glide px-4">
      <!-- ---------------  Slider  ---------------- -->
      <div class="glide__track px-8" data-glide-el="track">
        <div class="glide__slides">
          <ul
            v-for="event in events"
            :key="event.title"
            class="glide__slide fixed-slide"
          >
            <Event
              :name="event.title"
              :description="event.description"
              :image="event.eventImage[0].url"
              :date="event.date"
              :beginTime="event.beginTime"
              :endTime="event.endTime"
              :required="event.rsvpRequired"
              :url="event.rsvpLink"
            >
            </Event>
          </ul>
        </div>
      </div>
      <!-- ---------------  Controls  ---------------- -->
      <div
        class="glide__arrows text-off-white text-[20px] flex justify-between p-4"
        data-glide-el="controls"
      >
        <button class="" data-glide-dir="<">&#8592;</button>
        <button class="" data-glide-dir=">">&#8594;</button>
      </div>
    </div>
  </div>
</template>

<script>
import Glide from "@glidejs/glide";
import Event from "./Event.vue";
import { fetchGraphQLData } from "../utils/query.js";

export default {
  name: "Carousel",
  components: {
    Event,
  },
  data() {
    return {
      events: [],
    };
  },
  created() {
    this.initEvents().then(() => {
      this.initializeGlide();
    });
  },

  methods: {
    async initEvents() {
      const query = `
            {
              eventsEntries (orderBy: "date DESC") {
                  ... on events_events_Entry {
                  title
                  description
                  eventImage {
                      url @transform (width: 350)
                  }
                  date
                  beginTime
                  endTime
                      rsvpRequired
                  rsvpLink
                  }
              }
            }
            `;

      try {
        const response = await fetchGraphQLData(query);
        const data = response.eventsEntries;
        this.events = data;
      } catch (error) {
        console.error(error);
      }
    },
    initializeGlide() {
      this.$nextTick(() => {
        new Glide(".glide", {
          type: "slider",
          startAt: 0,
          focusAt: "center",
          perView: 2,
          keyboard: true,
          gap: 20,
          rewind: false,
        }).mount();
      });
    },
  },
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
