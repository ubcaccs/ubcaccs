<template> 

    <li class="flex-none rounded-[32px] text-off-white bg-event-blue w-[350px] h-[400px] shadow-lg font-mainFont">
        <div class="flex flex-col items-center justify-center direction-column pt-6">
            <div v-if="!flipped" class="pb-[1.4rem]">
                <img :src="image" class="rounded-[22px] object-scale-down h-[300px]">
            </div>
            <div v-if="flipped" class="pt-8 px-8 flex flex-col items-center justify-center">
                <h2 v-text="name" class="text-[20px] font-bold"></h2>
                <p v-text="description" class="text-[16px] pt-2"></p>
                <button class="bg-off-white rounded-[22px] py-2 flex justify-center text-dark-blue bold px-8">RSVP</button>
            </div>
            <button @click="flipCard" v-text="label" class="underline text-[16px] hover:text-light-blue"></button>
        </div>
    </li>

</template>


<script>

export default {
    name: 'Event',
    props: ['name', 'description', 'image'],
    data() {
        return {
            flipped: false,
            label: 'Read more',
        };
    },

    methods: {
        flipCard() {
            this.flipped = !this.flipped;
            this.label = this.flipped ? 'Back' : 'Read more';
        },
    }
}
</script>