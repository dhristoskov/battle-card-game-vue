<template>
    <battle-card>
        <h3 class="name-tag">{{monster.name}}</h3>
        <health-bar :health='monsterHealth' />
        <attack-bar :monsterAtkCounter='monsterAtkCounter'/>
        <img :src="getImageUrl(monster.img)" alt="monster">
    </battle-card>
</template>

<script>
import HealthBar from '../shared/HealthBar/HealthBar'
import MonsterAttackBar from './components/MonsterAttackBar'
import BattleCard from '../shared/BattleCard/BattleCard'

export default {
  props: [
    'monsterHealth',
    'monster',
    'monsterAtkCounter'
  ],
  components: {
    healthBar: HealthBar,
    battleCard: BattleCard,
    attackBar: MonsterAttackBar
  },
  methods: {
    getImageUrl (monsterImg) {
      return require('../assets/' + monsterImg)
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
      height: 350px;
      margin: auto;
    }
</style>
