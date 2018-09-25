<template>
    <v-ons-bottom-toolbar>
        <div id="bottom-toolbar">
            <v-ons-toolbar-button v-for="(tab, i) in tabs" :key="i">
                <router-link :to="{name: tab.name}">
                    <v-ons-icon :icon="tab.icon" size="30px"></v-ons-icon>
                </router-link>
            </v-ons-toolbar-button>
        </div>
    </v-ons-bottom-toolbar>
</template>
<script src="./index.js"></script>
<style>
  #bottom-toolbar {
    display: flex;
    height: 100%;
    align-content: baseline;
    justify-content: space-between;
    padding: 0px 30px;
  }
  #bottom-toolbar .toolbar-button{
      display: flex;
      align-items: center;
  }
</style>