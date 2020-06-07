<template>
    <div class="main-wrapper">
        <h1 class="title">Choose Your Character</h1>
        <div class="hero-list">
          <hero-card v-for="hero in heroes"
          :hero='hero' :key='hero.id'
          :selectHero='selectHero'/>
        </div>
    </div>
</template>

<script>
import HeroCard from './components/HeroCard'
import { heroList } from '../shared/data'

export default {
  data () {
    return {
      heroes: heroList,
      hero: ''
    }
  },
  components: {
    heroCard: HeroCard
  },
  methods: {
    selectHero (hero) {
      this.hero = hero
      this.$router.push(`/battle/${this.hero}`)
    }
  }
}
</script>

<style lang="scss" scoped>
  .main-wrapper{
    background-image: url('../assets/background.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100vw;
    min-height: 100vh;
    z-index: -2;
    .title {
      -webkit-text-stroke: 2px black;
      color: white;
      font-size: 45px;
      text-align: center;
      padding: 45px 0;
    }
    .hero-list{
      width: 60%;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      margin: auto;
    }
  }
</style>
