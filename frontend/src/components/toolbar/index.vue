<template>
    <v-ons-toolbar>
      <!--
      <div class="left" v-if="!hideBackBtn">
        <v-ons-back-button>{{$options.backTitle}}</v-ons-back-button>
      </div>
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
