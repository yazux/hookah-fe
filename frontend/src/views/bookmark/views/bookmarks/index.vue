<template>
  <v-ons-page>
    <bookmarks-list v-show="bookmarks && bookmarks.length" v-bind:bookmarks="bookmarks"></bookmarks-list>
  </v-ons-page>
</template>
<script src="./index.js"></script>
