<template>
    <div class='mana-bar'>
        <p class="info-title">Mana Power</p>
        <div class='manabar' :style="{width: mana +'%'}" >
            <p>{{ mana }}%</p>
        </div>
    </div>
</template>

<script>
export default {
  props: [
    'mana'
  ]
}
</script>

<style lang="scss" scoped>
    .mana-bar{
        position: relative;
        margin-top: 5px;
        border: 1px solid rgb(0, 0, 0);
        border-radius: 25px;
        .info-title {
          position: absolute;
          top: 1px;
          left: 9px;
          color: black;
          font-size: 12px;
          font-weight: 700;
        }
        .manabar {
          border-radius: 25px;
          background: rgb(70, 134, 218);
          height: 15px;
          padding: 2px 0;
          transition: width 700ms;
          p {
            position: absolute;
            top: 0;
            left: 47%;
            font-size: 14px;
          }
        }
    }
</style>
