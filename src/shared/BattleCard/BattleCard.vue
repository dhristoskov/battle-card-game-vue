<template>
     <div class="card">
         <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
  .card{
    display: flex;
    flex-direction: column;
    width: 325px;
    background-color: white;
    padding: 15px;
    border: 2px solid rgb(221, 91, 91);
    box-shadow: 5px 5px 7px 1px #070707;;
    border-radius: 25px;
    overflow: hidden;
  }
</style>
