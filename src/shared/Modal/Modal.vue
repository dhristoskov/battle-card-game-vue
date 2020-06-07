<template>
    <div>
        <backdrop/>
        <div class="modal">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import Backdrop from '../Backdrop/Backdrop'

export default {
  components: {
    backdrop: Backdrop
  }
}
</script>

<style lang="scss" scoped>
    .modal {
        position: fixed;
        z-index: 40;
        background-color: white;
        width: 30%;
        border: 1px solid black;
        box-shadow: 1px 1px 1px black;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        p {
            position: fixed;
            top: -25px;
            right: -5px;
            color: black;
            text-align: center;
            font-size: 12px;
            font-weight: 700;
            text-transform: uppercase;
            padding: 2px 4px;
            width: 50px;
            margin-left: auto;
            cursor: pointer;
        }
    }
</style>
