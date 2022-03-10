<template>
  <section class="hero">
    <div class="hero__text">
      <div class="hero__logo">
        <img src="../../assets/img/logo.svg" alt="logo" class="hero__logo">
        <p class="hero__logo-txt">English app</p>
      </div>
      <div class="hero__desc">
        <p class="hero__desc-title">Effeng</p>
        <p class="hero__desc-txt">
          It’s free application for learning <br>
          English words
        </p>
      </div>
      <div class="hero__link">
        <router-link :to="{ name: 'Login' }" class="btn"> Start learn </router-link>
        <router-view />
      </div>
    </div>
    <div class="hero__img">
      <img class="hand-effeng" src="../../assets/img/phone.svg" alt="hand-effeng">
    </div>
  </section>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HeroSection',
  props: {
    routes: {
      type: String,
      default: '',
    },
  },
});
</script>

<style lang="scss" scoped>
.hero__logo {
  width: 2rem;
  height: 2rem;
}

.hero {
  @extend %flexAlign;
  justify-content: space-between;
  height: 100%;
  width: 100%;

  &__desc {
    margin-bottom: 2rem;
    &-title {
      margin: 2rem 0;
      font-size: 4.5rem;
      font-family: $concertFont;
      color: $yellow;
    }
    &-txt {
      font-family: $secularFont;
      font-size: 1.75rem;
      color: $white;
    }
  }

  &__logo {
    display: flex;
    flex-direction: column;
  }

  &__logo-txt {
    font-size: 1.5rem;
    color: $white;
    font-family: $secularFont;
    white-space: nowrap;
  }

  &__img {
    .hand-effeng {
      width: 100%;
      object-fit: cover;
      animation: fadeScale 1s cubic-bezier(0.39, -1.05, 0.6, 1.95);
    }
  }
}

@media screen and (max-width: $phone) {
  .hero {
    overflow: hidden;
    &__logo-txt {
      font-size: 1rem;
    }
    &__desc-title {
      font-size: 2.5rem;
    }
    &__desc-txt {
      font-size: 1rem;
    }
  }

  .hand-effeng {
    transform: scale(1.5);
    transition: $transition;
    margin-left: 2.5rem;
  }

  .btn {
    width: 140px;
    font-size: 1rem;
    letter-spacing: normal;
    white-space: nowrap;
  }
}
</style>
