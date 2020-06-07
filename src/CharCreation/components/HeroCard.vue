<template>
    <div class="hero-img" @click="selectHero(hero.name)">
        <p>{{hero.name}}</p>
        <img :src="getImageUrl(hero.img)" alt="hero">
    </div>
</template>

<script>
export default {
  props: [
    'hero',
    'selectHero'
  ],
  methods: {
    getImageUrl (heroImg) {
      return require('../../assets/' + heroImg)
    }
  }
}
</script>

<style lang="scss" scoped>
    .hero-img {
        position: relative;
        width:225px;
        height: 325px;
        border: 2px solid rgb(221, 91, 91);
        box-shadow: 5px 5px 7px 1px #070707;;
        border-radius: 25px;
        overflow: hidden;
        transition: all .3s ease-in;
        background-color: white;
        cursor: pointer;
        &:hover {
            border: 2px solid green;
            transform: scale(1.1);
        }
        img {
            padding: 10px;
            width:225px;
            height: 325px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 0;
        }
        p {
            position: absolute;
            top: 5px;
            left: 35%;
            color: black;
            font-size: 20px;
            font-weight: 700;
            z-index: 1;
        }
    }
</style>
