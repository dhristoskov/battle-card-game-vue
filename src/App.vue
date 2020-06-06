<template>
  <transition name="slide" mode="out-in">
    <router-view/>
  </transition>
</template>

<script>
export default {
}
</script>

<style lang="scss">
  * {
    padding: 0;
    margin: 0;
  }

  html {
    box-sizing: border-box;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  .slide-enter-active {
      animation: slide-in 300ms ease-out forwards;
  }

  .slide-leave-active {
      animation: slide-out 300ms ease-out forwards;
  }

  @keyframes slide-in {
      from {
          transform: translateY(-200px);
          opacity: 0;
      }
      to {
          transform: translateY(0);
          opacity: 1;
      }
  }

  @keyframes slide-out {
      from {
          transform: translateY(0);
          opacity: 1;
      }
      to {
          transform: translateY(200px);
          opacity: 0;
      }
  }
</style>
