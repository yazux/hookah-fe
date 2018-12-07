<template>
    <v-ons-bottom-toolbar>
        <div id="bottom-toolbar">
            <router-link class="bottom-toolbar-button" v-for="(tab, i) in tabs" :key="i" :to="{name: tab.name}">
                <font-awesome-icon :icon="tab.icon"/>
            </router-link>
        </div>
    </v-ons-bottom-toolbar>
</template>
<script src="./index.js"></script>
<style>
  #bottom-toolbar {
    display: flex;
    height: 100%;
    align-items: center;
    align-content: center;
    justify-content: space-between;
    padding: 0px 30px;
  }
  #bottom-toolbar .bottom-toolbar-button{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70pt;
    height: 35pt;
    font-size: 20pt;
  }
</style>
