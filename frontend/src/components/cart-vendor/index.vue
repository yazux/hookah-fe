<template>
    <v-ons-card class="vendor-cart" v-if="vendor">
    <img :src="vendor.hero_image.path" :alt="vendor.name" style="width: 100%">
    <header class="header">
        <div class="title-container">
        <h4 class="cart-title">{{vendor.name}}</h4>
        <span class="country">{{vendor.country}}</span>
        </div>
        <span class="rating-container">
        <v-ons-icon icon="md-star-circle" class="list-item__icon"></v-ons-icon>
        <span>{{vendor.rating}}</span>
        </span>
    </header>
    <div class="content" v-html="vendor.description">
        {{vendor.description}}
    </div>
    </v-ons-card>
</template>
<script src="./index.js"></script>
<style>
  .vendor-cart .header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  .vendor-cart .header .country{
    display: block;
    font-size: 12px;
    line-height: 12px;
    font-weight: bold;
    color: #989898;
  }
</style>
