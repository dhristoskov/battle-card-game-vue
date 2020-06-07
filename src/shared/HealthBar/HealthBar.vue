<template>
    <div class='healthbar-outer'>
            <p class="info-title">HP</p>
            <div class='healthbar' :style="{width: health +'%'}" >
                <p class="health">{{ health }}</p>
            </div>
    </div>
</template>

<script>
export default {
  props: ['health']
}
</script>

<style lang="scss" scoped>
 .healthbar-outer{
        position: relative;
        border: 2px solid black;
        border-radius: 25px;
        overflow: hidden;
        .info-title {
          position: absolute;
          top: 3px;
          left: 9px;
          color: black;
          font-size: 12px;
          font-weight: 700;
        }
        .healthbar {
            text-align: center;
            border-radius: 25px;
            background: rgb(230, 62, 20);
            height: 20px;
            padding: 5px 0;
            color: white;
            transition: width 700ms;
            .health {
              position: absolute;
              color: black;
              top: 2px;
              left: 47%;
          }
        }
    }
</style>
