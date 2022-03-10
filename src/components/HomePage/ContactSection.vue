<template>
  <section class="contact">Contact</section>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ContactSection',
  props: {
    routes: {
      type: String,
      default: '',
    },
  },
});
</script>

<style lang="scss" scoped>
.contact {
  color: $beige;
  height: 100%;
  width: 100%;
}
</style>
