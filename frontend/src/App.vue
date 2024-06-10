
<template>
  <header>
    <link rel="stylesheet" href="./assets/output.css">
  </header>



  <main>
    <div class="bg-gradient-to-t from-dark-blue from-20% via-[#06143B] via-60% to-navbar-blue to-80% h-svh">
        <Navbar></Navbar>
        <Home></Home>
        <Events></Events>
        <About></About>
        <Contact></Contact>
    </div>
  </main>

</template>

<script>
  import Navbar from "./components/Navbar.vue";
  import Home from "./components/Home.vue";
  import Events from "./components/Events.vue";
  import About from "./components/About.vue";
  import Contact from "./components/Contact.vue";


  export default {
    name: 'App',

    components: {
      Navbar,
      Home, 
      Events,
      About,
      Contact
    },

    data () {
      return {
        description: 'hello world',
      }
    },
  }

</script>
