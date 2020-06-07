<template>
    <div class='player-btn'>
        <button @click='attack'>Attack</button>
        <button @click='specialAttack' :disabled='attackCounter < 5'>Special</button>
        <button @click='usePotion' :disabled='hpPotion <= 0'>HP</button>
    </div>
</template>

<script>
export default {
  props: [
    'attack',
    'specialAttack',
    'attackCounter',
    'usePotion',
    'hpPotion'
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
