<template>
  <v-ons-page>
    <cart-vendor :vendor="vendor"></cart-vendor>
  </v-ons-page>
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
