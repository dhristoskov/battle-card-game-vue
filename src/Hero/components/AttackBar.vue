<template>
    <div class='attack-bar'>
        <p class="info-title">Specail Attack</p>
        <div class='atackbar' :style="{width: ( attackCounter * 20 ) +'%'}" >
            <p>{{ attackCounter }}/5</p>
        </div>
    </div>
</template>

<script>
export default {
  props: [
    'attackCounter'
  ]
}
</script>

<style lang="scss" scoped>
    .attack-bar{
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
        .atackbar {
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
