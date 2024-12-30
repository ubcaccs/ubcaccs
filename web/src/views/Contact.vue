<template>
  <div class="flex items-center flex-col pb-48 pt-4 px-4">
    <div
      class="flex flex-col items-center bg-navbar-blue py-32 rounded-[22px] max-w-screen-xl w-full p-6 box-border"
    >
      <h1
        class="text-off-white font-headerFont font-bold text-6xl text-center w-full pb-10"
      >
        Let's get in touch
      </h1>
      <div class="flex gap-6 flex-wrap justify-center pb-8">
        <!---Instagram--->
        <button
          @click="openLink(instagram)"
          aria-label="Instagram"
          class="flex items-center bg-dark-blue pt-2 pb-1 pl-2 pr-4 rounded-lg h-[50px] w-[145px]"
        >
          <span class="[&>svg]:h-6 [&>svg]:w-6 pb-1 pr-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#EDF0F5"
              viewBox="0 0 448 512"
            >
              <path
                d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
              />
            </svg>
          </span>
          <img
            src="https://download.logo.wine/logo/Instagram/Instagram-Wordmark-White-Logo.wine.png"
            alt="Contact us"
            class="w-[100px] h-[80px] pt-[0.1em] object-cover"
          />
        </button>
        <!--Discord-->
        <button
          @click="openLink(discord)"
          aria-label="Discord"
          class="flex items-center bg-dark-blue pt-2 pb-1 pl-2 pr-4 rounded-lg"
        >
          <span class="[&>svg]:h-6 [&>svg]:w-6 pb-1 pr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#EDF0F5"
              viewBox="0 0 640 512"
            >
              <path
                d="M524.5 69.8a1.5 1.5 0 0 0 -.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0 -1.9 .9 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.1-30.6 1.9 1.9 0 0 0 -1.9-.9A483.7 483.7 0 0 0 116.1 69.1a1.7 1.7 0 0 0 -.8 .7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7A348.2 348.2 0 0 0 208.1 430.4a1.9 1.9 0 0 0 -1-2.6 321.2 321.2 0 0 1 -45.9-21.9 1.9 1.9 0 0 1 -.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9 .2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1 -.2 3.1 301.4 301.4 0 0 1 -45.9 21.8 1.9 1.9 0 0 0 -1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1 .7A486 486 0 0 0 610.7 405.7a1.9 1.9 0 0 0 .8-1.4C623.7 277.6 590.9 167.5 524.5 69.8zM222.5 337.6c-29 0-52.8-26.6-52.8-59.2S193.1 219.1 222.5 219.1c29.7 0 53.3 26.8 52.8 59.2C275.3 311 251.9 337.6 222.5 337.6zm195.4 0c-29 0-52.8-26.6-52.8-59.2S388.4 219.1 417.9 219.1c29.7 0 53.3 26.8 52.8 59.2C470.7 311 447.5 337.6 417.9 337.6z"
              />
            </svg>
          </span>
          <p class="font-discord text-off-white text-[17px]">Discord</p>
        </button>
        <!--LinkedIn-->
        <button
          @click="openLink(linkedin)"
          aria-label="LinkedIn"
          class="flex items-center bg-dark-blue pt-2 pb-[0.3rem] px-5 rounded-lg"
        >
          <p class="text-off-white text-[21px] font-semibold">Linked</p>

          <span class="[&>svg]:h-6 [&>svg]:w-6 pb-1 pl-0.5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path
                fill="#ecf0f6"
                d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
              />
            </svg>
          </span>
        </button>
        <!-- Email -->
        <button
          @click="openLink(email)"
          aria-label="Email"
          class="flex items-center bg-dark-blue pt-2 pb-[0.3rem] px-5 rounded-lg"
        >
          <svg
            class="w-4 h-4 text-white me-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="#EDF0F5"
            viewBox="0 0 20 16"
          >
            <path
              d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"
            />
            <path
              d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"
            />
          </svg>
          <p class="font-headerFont text-off-white">Email</p>
        </button>
      </div>

      <p class="font-headerFont text-off-white text-[20px]">
        We hope to hear from you soon!
      </p>
    </div>
  </div>
</template>

<script>
import "@fontsource/black-han-sans";
//import Instagram from "../assets/Instagram.vue";
import { fetchGraphQLData } from "../utils/query.js";

const query = `
{
  contactEntries(orderBy: "date DESC") {   
    ... on contact_contact_Entry {
      title
      instagramLink
      discordLink
      linkedin
      email
    }
  }
}`;
const response = await fetchGraphQLData(query);
const data = response.contactEntries[0];

export default {
  name: "Contact",
  data() {
    return {
      instagram: "",
      discord: "",
      linkedin: "",
      email: "",
    };
  },
  created() {
    this.instagram = data.instagramLink;
    this.discord = data.discordLink;
    this.linkedin = data.linkedin;
    this.email = data.email;
  },
  methods: {
    openLink(link) {
      window.open(link, "_blank");
    },
  },
};
</script>