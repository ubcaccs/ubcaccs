<template>
  <li
    class="flex-none rounded-[32px] text-off-white bg-event-blue w-[350px] h-[400px] shadow-lg font-mainFont"
  >
    <div
      class="flex flex-col items-center justify-center direction-column pt-6"
    >
      <div v-if="!flipped" class="pb-[1.4rem]">
        <img :src="image" :alt="name" class="rounded-[22px] object-scale-down h-[300px]" />
      </div>
      <div
        v-if="flipped"
        class="h-[325px] w-[290px] pb-[1.1rem] flex flex-col justify-center"
      >
        <h2 v-text="name" class="text-[20px] font-bold pt-1"></h2>
        <div class="h-[600px]">
          <p v-text="description" class="text-[16px] pt-2"></p>
          <p v-text="formattedDate" class="text-[16px] pt-3"></p>
          <p v-text="formattedTime" class="text-[16px] pt-2 pb-2"></p>
        </div>

        <button
          v-text="rsvpLabel"
          @click="rsvp"
          :class="[
            required && !passed
              ? 'bg-off-white rounded-[22px] py-2 flex justify-center text-dark-blue bold px-8 hover:text-light-blue'
              : 'bg-gray-300 rounded-[22px] py-2 flex justify-center text-gray-500 bold px-8',
          ]"
        ></button>
      </div>
      <button
        @click="flipCard"
        v-text="label"
        class="underline text-[16px] hover:text-light-blue"
      ></button>
    </div>
  </li>
</template>

<script>
export default {
  name: "Event",
  props: [
    "name",
    "description",
    "image",
    "date",
    "beginTime",
    "endTime",
    "required",
    "url",
  ],

  data() {
    return {
      flipped: false,
      label: "Read more",
      passed: false,
    };
  },
  computed: {
    formattedDate() {
      const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      const eventDate = new Date(this.date);
      return (
        "Date: " + new Intl.DateTimeFormat("en-US", options).format(eventDate)
      );
    },

    formattedTime() {
      const beginFormatted = this.formatTime(this.beginTime);
      const endFormatted = this.formatTime(this.endTime);
      return `Time: ${beginFormatted} - ${endFormatted}`;
    },
    rsvpLabel() {
      const eventDate = new Date(this.date);
      const today = new Date();
      if (eventDate < today) {
        this.passed = true;
        return "Event has passed";
      }
      return this.required ? "Sign up" : "No RSVP required";
    },
  },

  methods: {
    flipCard() {
      this.flipped = !this.flipped;
      this.label = this.flipped ? "Back" : "Read more";
    },
    formatTime(isoString) {
      const date = new Date(isoString);
      return new Intl.DateTimeFormat("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      }).format(date);
    },
    rsvp() {
      if (this.required && !this.passed) {
        window.open(this.url, "_blank");
      }
    },
  },
};
</script>
