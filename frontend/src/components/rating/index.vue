<template>
  <div class="rating-action-container">
    <span v-on:click="setRating(1)" :class="'up ripple-wave' + ((URV.id && URV.user_id == $props.userId && parseInt(URV.rating)) ? ' active' : '')"><font-awesome-icon size="2x" :icon="{iconName: 'thumbs-up', prefix: 'far'}"/></span>
    <span class="value">{{($props.value) ? $props.value : 0}}</span>
    <span v-on:click="setRating(0)" :class="'down ripple-wave' + ((URV.id && URV.user_id == $props.userId && !parseInt(URV.rating)) ? ' active' : '')"><font-awesome-icon size="2x" :icon="{iconName: 'thumbs-down', prefix: 'far'}"/></span>
  </div>
</template>
<script src="./index.js"></script>
<style>
  .rating-action-container{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .rating-action-container .value{
    font-size: 15pt;
  }
  .rating-action-container .up{
    padding: 0px 0px 4px 4px;
  }
  .rating-action-container .down{
    transform: scale(-1, 1);
    padding: 4px 0px 0px 4px;
  }
  .rating-action-container .up,
  .rating-action-container .down{
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
  }
  .rating-action-container .up svg,
  .rating-action-container .down svg{
    color: #000;
    fill: #000;
  }
  .rating-action-container .up.active svg,
  .rating-action-container .down.active svg{
    color: red;
    fill: red;
  }
</style>
