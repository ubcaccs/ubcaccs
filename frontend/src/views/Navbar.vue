<template>
    <nav class="text-off-white text-base font-mainFont py-4 bg-navbar-blue">
            <div class="max-w-[48em] px-5">
                <ul class="flex justify-between items-center">
                    <a href="#" class="hover:opacity-50">
                        <img class="logo-image w-[129px]" src="../images/logo.png" alt="AccessCS Logo">
                    </a>

                    <div v-for="button in buttons" :key="button">
                        <li><a href="#" class="p-4 hover:text-light-blue">{{ button }}</a></li>
                    </div>
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
}
</script>