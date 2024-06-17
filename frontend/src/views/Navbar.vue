<template>
    <nav class="text-off-white text-base font-mainFont py-4 bg-navbar-blue">
            <div class="max-w-[48em] px-5">
                <ul class="flex justify-between items-center">
                    <li><a @click="scrollTo('home')" class="hover:opacity-50">
                        <img class="logo-image w-[129px]" src="../images/logo.png" alt="AccessCS Logo">
                    </a></li>
                    <li><a @click="scrollTo('events')" class="p-4 hover:text-light-blue">Events</a></li>
                    <li><a @click="scrollTo('about')" class="p-4 hover:text-light-blue">About</a></li>
                    <li><a @click="scrollTo('contact')" class="p-4 hover:text-light-blue">Contact us</a></li>
                </ul>
            </div>
        </nav>
</template>

<script>
export default {
    name: 'Navbar',
    data () {
        return {
            buttons: ['Events', 'About', 'Contact us'],
        }
    },
    methods: {
        scrollTo(section) {
            this.$emit('scrollTo', section);
        }
    }
}
</script>