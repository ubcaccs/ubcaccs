<template> 

<li class="flex-none rounded-xl text-gray-800 bg-event-blue w-[350px] h-[400px] shadow-lg">
    {{ name }}
</li>

</template>


<script>
export default {
    name: Event,
    props: {
        name: String
    }

    
}
</script>