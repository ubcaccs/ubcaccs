
<template>
  <header class="fixed top-0 left-0 right-0 z-50">
    <link rel="stylesheet" href="./assets/output.css">
    <Navbar @scrollTo="scrollToSection"></Navbar>
  </header>



  <main>
    <div class="bg-gradient-to-t from-dark-blue from-20% via-[#06143B] via-60% to-navbar-blue to-80% h-svh pt-28">
      <section ref="home">
        <Home></Home>
      </section>
      <section ref="events">
        <Events></Events>
      </section>
      <section ref="about">
        <About></About>
      </section>
      <section ref="contact">
        <Contact></Contact>
      </section>
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
    methods: {
      scrollToSection(section) {
        const target = this.$refs[section];
        if (target) {
          const navbarHeight = 85;
          const targetPosition = target.offsetTop - navbarHeight;
          window.scrollTo({ top: targetPosition, behavior: 'smooth' });
        }
      }
    }
  }

</script>
<style>
/* Custom scrollbar styles */
::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-track {
  background: #030B1F;
}

::-webkit-scrollbar-thumb {
  background: #EDF0F5;
}

::-webkit-scrollbar-thumb:hover {
  background: #ffffff,
}

</style>