<template>
  <section class="about">About</section>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AboutSection',
  props: {
    routes: {
      type: String,
      default: '',
    },
  },
});
</script>

<style lang="scss" scoped>
.about {
  color: $beige;
  height: 100%;
  width: 100%;
}
</style>
