<template>
    <v-ons-bottom-toolbar>
        <div id="bottom-toolbar">
            <router-link :class="'bottom-toolbar-button' + (($route.name === tab.name) ? ' active-button' : '')" v-for="(tab, i) in tabs" :key="i" :to="{name: tab.name}">
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
    width: 25%;
    height: 35pt;
    font-size: 20pt;
    box-sizing: content-box;
  }
  #bottom-toolbar .bottom-toolbar-button svg{
    color: #000;
    fill: #000;
  }
  #bottom-toolbar .bottom-toolbar-button.active-button svg{
    color: red;
    fill: red;
  }
</style>
