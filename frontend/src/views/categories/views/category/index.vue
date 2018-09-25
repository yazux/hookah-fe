<template>
  <v-ons-page>
    <v-ons-list>
        <v-ons-list-item 
            tappable 
            modifier="chevron"
            v-for="mix in mixes" 
            v-on:click="toMix(mix)"
            :key="mix.id"
        >
            <div class="center">
                <span class="list-item__title">{{mix.name}}</span>
                <div class="tag-container">
                    <span v-if="mix.tobacco && mix.tobacco.length"  v-for="item in mix.tobacco"    class="tag small">{{item.vendor.name + ' ' + item.flavor}}</span>
                </div>
            </div>
            <div class="right">
                <span class="rating-container">
                    <v-ons-icon icon="md-star-circle" class="list-item__icon"></v-ons-icon>
                    <span>{{mix.rating}}</span>
                </span>
            </div>
        </v-ons-list-item>
    </v-ons-list>
  </v-ons-page>
</template>
<script src="./index.js"></script>