
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
  import Navbar from "./views/Navbar.vue";
  import Home from "./views/Home.vue";
  import Events from "./views/Events.vue";
  import About from "./views/About.vue";
  import Contact from "./views/Contact.vue";


  export default {
    name: 'App',

    components: {
      Navbar,
      Home, 
      Events,
      About,
      Contact
    },
  }

</script>
