<template>
  <v-ons-page>
    <v-ons-list class="vendors-list" v-if="vendors">
      <v-ons-list-item class="vendors-list-item" tappable v-for="vendor in vendors" v-on:click="toVendor(vendor)" :key="vendor.id">
        <div class="left">
          <img class="list-item__thumbnail" :src="vendor.hero_image.path">
        </div>
        <div class="center">
          <span class="title list-item__title">{{vendor.name}}</span>
          <span class="list-item__subtitle">
            <span>{{vendor.country}}</span>
          </span>
        </div>
        <div class="right">
          <span class="rating-container">
            <font-awesome-icon class="list-item__icon" icon="star"/>
            <span>{{vendor.rating}}</span>
          </span>
        </div>
      </v-ons-list-item>
    </v-ons-list>
  </v-ons-page>
</template>
<script src="./index.js"></script>
<style>
  .vendors-list {
    background-color: #efeff4;
  }
  .vendors-list-item {
    width: calc(100% - 16px);
    margin: 8px;
    padding: 8px 0px 8px 12px;
    -webkit-font-smoothing: antialiased;
    box-shadow: 0 1px 2px rgba(0,0,0,.12) !important;
    border-radius: 8px;
    background-color: #fff;
  }
  .vendors-list-item .left {
    padding: 0 14px 0 0;
  }
  .vendors-list-item .left img{
    width: 40pt;
    height: 40pt;
    box-shadow: 0 1px 2px rgba(0,0,0,.12);
  }
  .vendors-list-item .title {
    font-size: 14pt;
    line-height: 10pt;
  }
  .vendors-list-item .center{
    padding: 0 8px 0 0;
    background: transparent;
  }
  .vendors-list-item .right{
    background-image: none;
  }
</style>
