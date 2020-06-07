<template>
  <div class="battle-ground">
    <button @click="backHome" class="back-btn">Back to Character Creation</button>
    <modal v-if="openModal">
      <game-status :winGame='winGame'
              :startGame='startGame'
              :ContinueGame='ContinueGame'
              :toggleModal='toggleModal'/>
    </modal>
    <div class="main-view">
      <hero :playerHealth='playerHealth'
            :attack='attack'
            :specialAttack='specialAttack'
            :attackCounter='attackCounter'
            :usePotion='usePotion'
            :hpPotion='hpPotion'
            :mana='wizardMana'
            :heal='healSkill'/>
      <battle-log :playerTurn='playerTurn'
                  :monsterTurn='monsterTurn'/>
      <monster :monsterHealth='monsterHealth'
               :monster='monster'
               :monsterAtkCounter='monsterAtkCounter'/>
    </div>
  </div>
</template>

<script>
import Hero from '../Hero/Hero'
import Monster from '../Monster/Monster'
import Modal from '../shared/Modal/Modal'
import GameMsg from './components/GameMsg'
import BattleLog from './components/BattleLog'
import { monsterList } from '../shared/data'

export default {
  data () {
    return {
      winGame: false,
      playerTurn: {},
      monsterTurn: {},
      openModal: false,
      playerHealth: 100,
      monsterHealth: 100,
      wizardMana: 100,
      hpPotion: 5,
      attackCounter: 0,
      monsterAtkCounter: 0,
      gameIsRunning: false,
      monster: monsterList[Math.floor(Math.random() * monsterList.length)]
    }
  },
  components: {
    modal: Modal,
    hero: Hero,
    monster: Monster,
    gameStatus: GameMsg,
    battleLog: BattleLog
  },
  methods: {
    startGame () {
      this.playerHealth = 100
      this.monsterHealth = 100
      this.attackCounter = 0
      this.wizardMana = 100
      this.hpPotion = 5
      this.gameIsRunning = true
      this.monsterAtkCounter = 0
      this.turns = null
      this.playerTurn = {}
      this.monsterTurn = {}
    },
    ContinueGame () {
      this.startGame()
      this.monster = this.pullNextMonster()
    },
    attack () {
      const damage = this.calculateDamage(4, 9)
      this.monsterHealth -= damage
      this.monsterAtack()
      this.playerTurn = {
        text: `Player hits Monster - ${damage} DMG`
      }
      if (this.attackCounter < 5) {
        this.attackCounter++
      }
      if (this.monsterAtkCounter < 10) {
        this.monsterAtkCounter++
      }
      this.checkGameStatus()
    },
    specialAttack () {
      const damage = this.calculateDamage(6, 16)
      this.monsterHealth -= damage
      this.monsterAtack()
      this.attackCounter = 0
      this.wizardMana -= 20
      this.checkGameStatus()
      this.playerTurn = {
        text: `Player hits Monster - ${damage} DMG`
      }
      if (this.monsterAtkCounter < 10) {
        this.monsterAtkCounter++
      }
    },
    healSkill () {
      this.playerHealth <= 85 ? this.playerHealth += 15 : this.playerHealth = 100
      this.wizardMana -= 10
      this.playerTurn = {
        text: 'Player heals for 15 HP'
      }
    },
    usePotion () {
      if (this.hpPotion >= 1) {
        this.hpPotion--
        this.playerHealth <= 90 ? this.playerHealth += 10 : this.playerHealth = 100
      }
      this.playerTurn = {
        text: `Player heals for 10 HP - ${this.hpPotion} left`
      }
    },
    monsterAtack () {
      let damage = this.calculateDamage(this.monster.minHit, this.monster.maxHit)
      if (this.monsterAtkCounter === 10) {
        damage = damage * 2
        this.monsterAtkCounter = 0
      }
      this.playerHealth -= damage
      this.checkGameStatus()
      this.monsterTurn = {
        text: `Monster hits Player - ${damage} DMG`
      }
    },
    calculateDamage (min, max) {
      return Math.max(Math.floor(Math.random() * max) + 1, min)
    },
    checkGameStatus () {
      if (this.monsterHealth <= 0) {
        this.openModal = true
        this.winGame = true
        this.gameIsRunning = false
      } else if (this.playerHealth <= 0) {
        this.openModal = true
        this.winGame = false
        this.gameIsRunning = false
      }
    },
    pullNextMonster () {
      monsterList.filter(el => el.id !== this.monster.id)
      return monsterList[Math.floor(Math.random() * monsterList.length)]
    },
    toggleModal () {
      this.openModal = !this.openModal
    },
    backHome () {
      this.$router.push({ name: 'Home' })
    }
  }
}
</script>

<style lang="scss">
  .battle-ground{
    padding: 40px 20px;
    position: relative;
    background-image: url('../assets/background.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100vw;
    min-height: 100vh;
    .back-btn {
      position: absolute;
      top: 20px;
      left: 20px;
      background: none;
      border: 1px solid white;
      padding: 8px;
      color: white;
      cursor: pointer;
    }
    .main-view {
      display: flex;
      justify-content: center;
    }
  }
</style>
