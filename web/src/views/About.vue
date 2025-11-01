<template>
  <div class="flex flex-wrap justify-center items-start flex-grow pb-32 py-24 px-2">
    <div class="align-start pr-2 max-w-[700px] w-full ">
      <h1
        class="text-off-white font-headerFont font-bold text-6xl text-left mb-8 leading-normal"
      >
        About us
      </h1>
      <p
        v-html="description"
        class="text-off-white text-[12px] text-left font-mainFont mb-8"
      ></p>
    </div>

    <!-- 
    <div class="w-full sm:w-auto py-4">
      <div
        class="p-4 bg-navbar-blue rounded-[22px] max-w-[650px] w-full mx-auto"
      >
        <img
          src="../images/yearendphoto.jpeg" alt="Year End Photo"
          class="rounded-[10px] object-cover object-center max-w-full w-full"
        />
      </div>
    </div>
    -->
    
  </div>
</template>

<script>
import { staticData } from "../data/staticData.js";

export default {
  name: "About",
  data() {
    return {
      description: staticData.about.subtext,
    };
  },
};
</script>
