<template>
  <div id="home">
    <Header />
    <main class="content">
      <div class="container">
        <HeroSection />
        <AboutSection style="display: none;" />
        <ContactSection style="display: none;" />
      </div>
    </main>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import Header from '../components/Header.vue';
import HeroSection from '../components/HomePage/HeroSection.vue';
import AboutSection from '../components/HomePage/AboutSection.vue';
import ContactSection from '../components/HomePage/ContactSection.vue';

export default defineComponent({
  name: 'HomePage',
  components: {
    Header,
    HeroSection,
    AboutSection,
    ContactSection,
  },
  props: {
    routes: {
      type: String,
      default: '',
    },
  },
});
</script>

<style lang="scss" scoped>
#home {
  background-image: url(../../public/img/bg.svg);
  object-fit: cover;
  background-repeat: no-repeat;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-size: 100% 100%;
}

.container {
  @extend %flexAlign;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
  max-width: 1100px;
  width: 100%;
  transition: $transition;
}

.home__logo {
  width: 2rem;
  height: 2rem;
}

.content {
  @extend %flexAlign;
  justify-content: center;
  height: 100%;
  background: bottom repeat-x url(../../public/img/waves.svg);
}

@media screen and (max-width: $laptop) {
  .container {
    max-width: 900px;
  }
}

@media screen and (max-width: $tablet) {
  .container {
    max-width: 600px;
  }
}

@media screen and (max-width: $phone) {
  .container {
    max-width: 320px;
    padding: 0 0.5rem;
  }
}
</style>
