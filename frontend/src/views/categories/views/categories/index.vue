<template>
  <v-ons-page id="categories-list">
    <v-ons-list class="categories-list" v-if="categories">
      <v-ons-list-item class="categories-list-item" tappable modifier="chevron" v-for="category in categories"  :key="category.id"  v-on:click="toCategory(category)">
        <div class="center">{{category.name}}</div>
        <div class="right">{{category.mixes_count}}</div>
      </v-ons-list-item>
    </v-ons-list>
  </v-ons-page>
</template>
<script src="./index.js"></script>
<style>
  .categories-list {
    background-color: #efeff4;
  }
  .categories-list .categories-list-item{
    width: calc(100% - 16px);
    margin: 8px;
    padding: 8px 0px 8px 12px;
    -webkit-font-smoothing: antialiased;
    box-shadow: 0 1px 2px rgba(0,0,0,.12) !important;
    border-radius: 8px;
    background-color: #fff;
    overflow: hidden;
  }
</style>
