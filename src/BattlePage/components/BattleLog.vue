<template>
    <div class="battle-log">
        <p class="log">{{ playerTurn.text }}</p>
        <p class="log">{{ monsterTurn.text }}</p>
    </div>
</template>

<script>
export default {
  props: [
    'playerTurn',
    'monsterTurn'
  ]
}
</script>

<style lang="scss" scoped>
  .battle-log {
        min-width: 250px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .log {
          color: white;
          font-size: 15px;
          margin-bottom: 5px;
        }
    }
</style>
