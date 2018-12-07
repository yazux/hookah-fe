<template>
    <v-ons-card class="vendor-cart" v-if="vendor">
      <div class="vendor-image">
        <img :src="vendor.hero_image.path" :alt="vendor.name">
      </div>
      <header class="header">
          <div class="title-container">
            <h4 class="cart-title">{{vendor.name}}</h4>
            <span class="country">{{vendor.country}}</span>
          </div>
          <span class="rating-container">
            <font-awesome-icon class="list-item__icon" icon="star"/>
            <span>{{vendor.rating}}</span>
          </span>
      </header>
      <div class="content" v-html="vendor.description">{{vendor.description}}</div>
    </v-ons-card>
</template>
<script src="./index.js"></script>
<style>
  #app .vendor-cart .header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  #app .vendor-cart .header .country{
    display: block;
    font-size: 12px;
    line-height: 12px;
    font-weight: bold;
    color: #989898;
  }
  #app .vendor-cart .cart-title{

  }
  #app .vendor-cart .header .country{
    font-size: 12pt;
  }
  #app .vendor-cart .content{}
  #app .vendor-cart {}
  #app .vendor-cart {}
  #app .vendor-cart .vendor-image {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
  }
  #app .vendor-cart .vendor-image img{
    max-width: 100%;
    border-radius: 10px;
  }
</style>
