<template>
<div class="flex justify-around flex-wrap items-start flex-grow">

    <div class="align-start pm-5 pb-28 pt-24 pr-2">
        <h1 class="text-off-white font-headerFont font-bold text-6xl text-left mb-4 max-w-[550px] leading-normal pb-2">
        {{ title }}
        </h1>
        <p class="text-off-white text-[20px] text-left font-mainFont max-w-[550px] pb-8">
        {{ subtext}}
        </p>
        <button @click="openSurvey" class="bg-off-white w-full rounded-lg py-2 flex justify-center">
            <a class="text-[16px] font-headerFont py-2 px-3 text-center">Send us your ideas</a>

            <div class="pt-[0.9em]">
                <svg width="51" height="12" viewBox="0 0 51 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M50.495 6.49497C50.7683 6.22161 50.7683 5.77839 50.495 5.50503L46.0402 1.05025C45.7668 0.776886 45.3236 0.776886 45.0503 1.05025C44.7769 1.32362 44.7769 1.76684 45.0503 2.0402L49.0101 6L45.0503 9.9598C44.7769 10.2332 44.7769 10.6764 45.0503 10.9497C45.3236 11.2231 45.7668 11.2231 46.0402 10.9497L50.495 6.49497ZM0 6.7H50V5.3H0V6.7Z" fill="black"/>
                </svg>
            </div>
        </button>
    </div>
    <Microphone/>
</div>
</template>

<script>
import Microphone from '../assets/Microphone.vue'
import { fetchGraphQLData } from '../utils/query.js'; 
const query = `
{
    entries {
        ... on home_home_Entry {
        title
        subtext
        surveyUrl
        }
    }
}`;

const response = await fetchGraphQLData(query);
const data = response.entries;

export default {    
    name: 'Home',
    data () {
        return {
            title: '',
            subtext: '',
            surveyUrl: ''
        };
    },
    components: {
        Microphone
    },
    created () {
        this.title = data[4].title;
        this.subtext = data[4].subtext;
        this.surveyUrl = data[4].surveyUrl;
    },
    methods: {
        openSurvey() {
            window.open(this.surveyUrl, '_blank');
        }
    }

}
</script>