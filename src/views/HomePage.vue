<template>
  <div id="home">
    <Header />
    <main class="content">
      <div class="container">
        <div class="content__text">
          <div class="content__logo">
            <img src="../assets/img/logo.svg" alt="logo" class="home__logo" />
            <p class="content__logo-txt">English app</p>
          </div>
          <div class="content__desc">
            <p class="content__desc-title">Effeng</p>
            <p class="content__desc-txt">
              It’s free application for learning <br />
              English words
            </p>
          </div>
          <div class="content__link">
            <router-link :to="{ name: 'Login' }" class="btn"> Start learn </router-link>
            <router-view />
          </div>
        </div>
        <div class="content__img">
          <img class="hand-effeng" src="../assets/img/phone.svg" alt="hand-effeng" />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import Header from '../components/Header.vue';

export default defineComponent({
  name: 'FeedPage',
  components: {
    Header,
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
@import '../assets/scss/styles.scss';

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
  &__text {
  }

  &__desc {
    margin-bottom: 2rem;
    &-title {
      margin: 2rem 0;
      font-size: 4.5rem;
      font-family: 'Concert One', cursive;
      color: $yellow;
    }
    &-txt {
      font-family: 'Secular One', sans-serif;
      font-size: 1.75rem;
      color: $white;
    }
  }

  &__link {
  }

  &__logo {
    display: flex;
    flex-direction: column;
  }

  &__logo-txt {
    font-size: 1.5rem;
    color: $white;
    font-family: 'Secular One', sans-serif;
  }

  &__img {
    .hand-effeng {
      width: 100%;
      object-fit: cover;
      animation: fadeScale 1s cubic-bezier(0.39, -1.05, 0.6, 1.95);
    }
  }
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

  .content {
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
    max-width: 140px;
    font-size: 1rem;
    letter-spacing: normal;
    white-space: nowrap;
  }
}
</style>
