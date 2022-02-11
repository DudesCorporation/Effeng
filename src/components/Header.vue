<template>
  <header class="header">
    <div class="header__container">
      <div class="header__content">
        <div class="header__logo">
          <img src="../../public/img/logo.png" alt="logo">
          <div class="header__logo-name">
            <router-link :to="{ name: 'Home' }">Effeng</router-link>
          </div>
        </div>

        <nav class="header__nav">
          <router-link :to="{ name: 'Login' }">About</router-link>
          <router-link :to="{ name: 'Login' }">Contact</router-link>
          <router-link :to="{ name: 'Login' }" class="header__nav--sign">Sign in</router-link>
        </nav>
        <router-view />
      </div>
    </div>
  </header>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Header',
  props: {
    routes: {
      type: String,
      default: '',
    },
  },
});
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: center;
  height: 4.37rem;
  background-color: $homeHeader;
  font-family: 'Concert One', cursive;
  border-radius: 0 0 3.12rem 3.12rem;
  filter: drop-shadow(0px 4px 25px rgba(0, 0, 0, 0.5));

  &__container {
    @extend %flexAlign;
    max-width: 1100px;
    width: 100%;
    transition: $transition;
  }

  &__content {
    @extend %flexAlign;
    justify-content: space-between;
    width: 100%;
    color: $white;
  }

  &__logo {
    @extend %flexAlign;
    animation: fadeScale 1s cubic-bezier(0.39, -1.05, 0.6, 1.95);
    &-name {
      margin-left: 1rem;
      font-size: 1.5rem;
      display: flex;
      align-items: baseline;
      & > a {
        color: $yellow;
      }
    }
  }

  &__nav {
    display: flex;
    & > a {
      color: $white;
      font-size: 1rem;
      letter-spacing: 1px;
      margin-left: 2rem;
      padding: 0.625rem 0.312rem;
      transition: all 0.2s ease-in;
      &:hover {
        color: $yellow;
      }
    }
  }
}

@media screen and (max-width: $laptop) {
  .header__container {
    max-width: 900px;
  }
}

@media screen and (max-width: $tablet) {
  .header__container {
    max-width: 600px;
  }
}

@media screen and (max-width: $phone) {
  .header__container {
    max-width: 320px;
    padding: 0 0.5rem;
  }

  .header__logo-name {
    font-size: 1.2rem;
    margin-left: 0.5rem;
  }

  .header__logo > img {
    width: 1.7rem;
    height: 1.7rem;
  }

  .header__nav > a {
    margin-left: 0;
    letter-spacing: 0;
    font-size: 0.8rem;
  }
}
</style>
