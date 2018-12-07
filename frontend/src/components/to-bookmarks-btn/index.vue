<template>
  <div>
    <v-ons-button v-show="!exist" modifier="material" v-on:click="toBookmarks()">В закладки</v-ons-button>
    <v-ons-button v-show="exist" modifier="material" v-on:click="deleteFromBookmarks()">Убрать из закладок</v-ons-button>
  </div>
</template>
<script src="./index.js"></script>
<style></style>
