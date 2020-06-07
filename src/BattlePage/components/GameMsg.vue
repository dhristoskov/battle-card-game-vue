<template>
    <div class="msg-wrapper">
        <h1>{{winGame ? 'Congratulations' : 'Yuo can try again'}}</h1>
        <h3>{{winGame ? 'You win the match' : 'You lost the game'}}</h3>
        <div class="settings">
            <button v-if="winGame" @click="ContinueGame(), toggleModal()">Continue</button>
            <button v-else @click="startGame(), toggleModal()">New Game</button>
            <button @click='onGiveUpHandler'>Give Up</button>
        </div>
    </div>
</template>

<script>
export default {
  props: [
    'winGame',
    'startGame',
    'toggleModal',
    'ContinueGame'
  ],
  methods: {
    onGiveUpHandler () {
      this.$router.push({ name: 'Home' })
    }
  }
}
</script>

<style lang="scss" scoped>
    .msg-wrapper{
        padding: 20px 10px;
        width: 100%;
        text-align: center;
        h1 {
            font-size: 30px;
        }
        h3 {
             font-size: 20px;
             margin: 10px 0 20px 0;
        }
        .settings {
            margin: 20px auto 10px auto;
            width: 50%;
            display: flex;
            justify-content: space-around;
            button {
                cursor: pointer;
                width: 70px;
                padding: 5px;
                background: transparent;
                border: 1px solid black;
                outline: none;
            }
        }
    }
</style>
