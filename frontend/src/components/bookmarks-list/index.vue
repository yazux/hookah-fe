<template>
  <v-ons-list class="bookmarks-list" v-if="$props.bookmarks && $props.bookmarks.length">
    <mixes-list-item v-for="bookmark in $props.bookmarks" v-bind:key="bookmark.mix.id" v-bind:mix="bookmark.mix"></mixes-list-item>
  </v-ons-list>
</template>
<script src="./index.js"></script>
<style>
  .bookmarks-list {
    background-color: #efeff4;
  }
</style>
