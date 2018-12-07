<template>
  <v-ons-list class="mixes-list" v-if="$props.mixes && $props.mixes.length">
    <mixes-list-item v-for="mix in $props.mixes" v-bind:key="mix.id" v-bind:mix="mix" v-bind:show-bookmark-btn="$props.showBookmarkBtn"></mixes-list-item>
  </v-ons-list>
</template>
<script src="./index.js"></script>
<style>
  .mixes-list {
    background-color: #efeff4;
  }
</style>
