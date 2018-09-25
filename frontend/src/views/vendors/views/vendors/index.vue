<template>
  <v-ons-page>
    <v-ons-list v-if="vendors">
      <v-ons-list-item tappable modifier="chevron" v-for="vendor in vendors" v-on:click="toVendor(vendor)" :key="vendor.id">
        <div class="left">
          <img class="list-item__thumbnail" :src="vendor.hero_image.path">
        </div>
        <div class="center">
          <span class="list-item__title">{{vendor.name}}</span>
          <span class="list-item__subtitle">
            <span>{{vendor.country}}</span>
          </span>
        </div>
        <div class="right">
          <span class="rating-container">
            <v-ons-icon icon="md-star-circle" class="list-item__icon"></v-ons-icon>
            <span>{{vendor.rating}}</span>
          </span>
        </div>
      </v-ons-list-item>
    </v-ons-list>
  </v-ons-page>
</template>
<script src="./index.js"></script>