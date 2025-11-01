<template>
    <div class="bg-dark-blue pt-8">
        <h1 class="text-off-white font-headerFont font-bold text-6xl text-center w-full">
            Events 
        </h1>
        <div class="pt-20">
            <Carousel/>
        </div>
    </div>
</template>

<script>
import Carousel from '../components/Carousel.vue'
export default {
    name: 'Events',
    components: {
        Carousel
    }
}
</script>