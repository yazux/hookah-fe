<template>
  <v-ons-list-item class="mixes-list-item" v-if="mix && mix.id" tappable v-on:click="toMix(mix)" :key="mix.id">
    <div class="center">
      <span class="title list-item__title">{{mix.name}}</span>
      <div class="tag-container">
        <span v-if="mix.tobacco && mix.tobacco.length"  v-for="item in mix.tobacco" class="tag small">{{item.vendor.name + ' ' + item.flavor}}</span>
      </div>
    </div>
    <div class="right">
      <span class="rating-container">
          <font-awesome-icon icon="star"/>
          <span>{{mix.rating}}</span>
      </span>
    </div>
  </v-ons-list-item>
</template>
<script src="./index.js"></script>
<style>
  .mixes-list-item {
    width: calc(100% - 16px);
    margin: 8px;
    padding: 8px 0px 12px 12px;
    -webkit-font-smoothing: antialiased;
    box-shadow: 0 1px 2px rgba(0,0,0,.12);
    border-radius: 8px;
    background-color: #fff;
  }
  .mixes-list-item .center{
    padding: 0 8px 0 0;
  }
  .mixes-list-item .right{background-image: none;}
  .mixes-list-item .center{
    background-image: none;
  }
  .mixes-list-item .title:first-letter {
    text-transform: uppercase;
  }
  .mixes-list-item .tag-container{}
</style>
