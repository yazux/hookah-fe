<template>
    <v-ons-toolbar class="top-toolbar">
      <!--
      <div class="left" v-show="backButton" v-on:click="$root.goBack">Назад</div>
      -->
      <div class="center">{{((title) ? title : '')}}</div>
      <!--
      <div class="right">
        <v-ons-toolbar-button icon="ion-navicon, material: search"></v-ons-toolbar-button>
      </div>
      -->
    </v-ons-toolbar>
</template>
<script src="./index.js"></script>
<style>
  .top-toolbar{}
  .top-toolbar .left{}
  .top-toolbar .center{
    font-size: 16pt;
    line-height: 40pt;
  }
  .top-toolbar .center:first-letter{
    text-transform: uppercase;
  }
  .top-toolbar .right{}
</style>
