<template>
  <div class="flex flex-wrap justify-center items-start flex-grow pb-32 py-24">
    <div class="align-start pr-2 max-w-[700px] w-full">
      <h1
        class="text-off-white font-headerFont font-bold text-6xl text-left mb-8 leading-normal pb-2"
      >
        About us
      </h1>
      <p
        v-html="description"
        class="text-off-white text-[20px] text-left font-mainFont mb-8"
      ></p>
    </div>
    <div class="w-full sm:w-auto py-4">
      <div
        class="p-4 bg-navbar-blue rounded-[22px] max-w-[650px] w-full mx-auto"
      >
        <img
          src="../images/yearendphoto.jpeg"
          class="rounded-[10px] object-cover object-center max-w-full w-full"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { fetchGraphQLData } from "../utils/query.js";
const query = `
    {
        entries(section: "About", orderBy: "date DESC") {
            title
            ... on about_about_Entry {
            subtext
            }
        }
    }
    `;
const data = await fetchGraphQLData(query);

export default {
  name: "About",
  data() {
    return {
      description: "",
    };
  },
  created() {
    this.description = data[0].subtext;
  },
};
</script>
