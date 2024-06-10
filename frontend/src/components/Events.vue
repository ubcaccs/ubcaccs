<template>
    <div class="bg-dark-blue h-svh">
        <h1 class="text-off-white font-headerFont font-bold text-6xl text-center pt-20 w-full">
            Events 
        </h1>
        <div class="pt-32">
            <Carousel/>
        </div>
    </div>
</template>

<script>
import Carousel from './carousel/Carousel.vue'
export default {
    name: 'Events',
    components: {
        Carousel
    }
}
</script>