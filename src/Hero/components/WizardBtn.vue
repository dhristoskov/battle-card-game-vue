<template>
    <div class='player-btn'>
        <button @click='attack'>Attack</button>
        <button @click='specialAttack' :disabled='mana < 20'>Special</button>
        <button @click="heal" :disabled='mana < 10'>Heal</button>
    </div>
</template>

<script>
export default {
  props: [
    'attack',
    'specialAttack',
    'mana',
    'heal'
  ]
}
</script>

<style lang="scss" scoped>
    .player-btn {
      display: flex;
      justify-content: space-evenly;
      button {
        cursor: pointer;
        text-align: center;
        width: 60px;
        border: 2px solid black;
        background: none;
        border-radius: 50%;
        padding: 22px 0;
        outline: none;
        font-size: 12px;
      }
    }
</style>
