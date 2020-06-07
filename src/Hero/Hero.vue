<template>
    <battle-card>
        <h3 class="name-tag">{{hero.name}}</h3>
        <health-bar :health='playerHealth' />
        <mana-bar v-if="hero.name==='Wizard'" :mana='mana' />
        <attack-bar v-else :attackCounter='attackCounter'/>
        <img :src="getImageUrl(hero.img)" alt="hero">
        <wizard v-if="hero.name==='Wizard'"
                :attack='attack'
                :specialAttack='specialAttack'
                :mana='mana'
                :heal='heal'/>
        <warrior v-else
                :attack='attack'
                :specialAttack='specialAttack'
                :attackCounter='attackCounter'
                :usePotion='usePotion'
                :hpPotion='hpPotion'/>
    </battle-card>
</template>

<script>
import BattleCard from '../shared/BattleCard/BattleCard'
import HealthBar from '../shared/HealthBar/HealthBar'
import WarriorBtn from './components/WarriorBtn'
import WizardBtn from './components/WizardBtn'
import AttackBar from './components/AttackBar'
import ManaBar from './components/ManaBar'
import { heroList } from '../shared/data'

export default {
  data () {
    return {
      hero: heroList.find(one => one.name === this.$route.params.type)
    }
  },
  props: [
    'playerHealth',
    'attack',
    'specialAttack',
    'attackCounter',
    'usePotion',
    'hpPotion',
    'mana',
    'heal'
  ],
  components: {
    battleCard: BattleCard,
    healthBar: HealthBar,
    warrior: WarriorBtn,
    attackBar: AttackBar,
    manaBar: ManaBar,
    wizard: WizardBtn
  },
  methods: {
    getImageUrl (heroImg) {
      return require('../assets/' + heroImg)
    }
  }
}
</script>

<style lang="scss" scoped>
    .name-tag {
      text-align: center;
    }
    img {
      padding: 10px;
      width: 300px;
      height: 375px;
      margin: auto;
    }
</style>
