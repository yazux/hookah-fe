<template>
  <v-ons-page>
    <v-ons-list v-if="categories">
      <v-ons-list-item 
        tappable 
        modifier="chevron"
        v-for="category in categories" 
        v-on:click="toCategory(category)"
        :key="category.id"
      >{{category.name}}</v-ons-list-item>
    </v-ons-list>
  </v-ons-page>
</template>
<script src="./index.js"></script>