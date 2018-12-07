<template>
  <v-ons-page class="tobacco-page">
    <div v-if="newMix">
      <v-ons-card v-if="newMix.tobacco" class="tobacco-cart">
        <div class="tobacco-list">
          <div v-for="item in newMix.tobacco" class="tobacco-item">
            <div class="circle">
              <radial-progress :percent="parseInt(item.percent)" symbol="%" width="80"></radial-progress>
            </div>
            <div class="info">
              <span class="flavor">{{item.flavor}}</span>
              <span class="vendor">{{item.vendor.name}}</span>
            </div>
          </div>
        </div>
      </v-ons-card>

      <v-ons-card v-if="newMix && newMix.id">
        <to-bookmarks-btn v-bind:mix-id="newMix.id" v-bind:bookmarks="newMix.bookmarks"></to-bookmarks-btn>
      </v-ons-card>

      <v-ons-card v-if="newMix.stowage">
        <div class="stowage">
          <div class="app-list">
            <div class="list-head">
              <font-awesome-icon class="material-icons list-icon" icon="stream"/>
              <span class="list-title">Укладка табака</span>
            </div>
            <div class="list-container">
              <span class="list-item" v-for="(tobacco, i) in newMix.stowage"  tappable :key="i">{{(i+1) + '. ' + tobacco}}</span>
            </div>
          </div>
        </div>
      </v-ons-card>

      <v-ons-card v-if="newMix.liquid">
        <div class="stowage">
          <div class="app-card">
            <div class="card-head">
              <font-awesome-icon class="material-icons card-icon" icon="flask"/>
              <span class="card-title">Наполнитель колбы</span>
            </div>
            <div class="card-container">{{newMix.liquid}}</div>
          </div>
        </div>
      </v-ons-card>

      <v-ons-card v-if="newMix.coal">
        <div class="stowage">
          <div class="app-card">
            <div class="card-head">
              <font-awesome-icon class="material-icons card-icon" icon="fire"/>
              <span class="card-title">Количество углей</span>
            </div>
            <div class="card-container">{{newMix.coal}}</div>
          </div>
        </div>
      </v-ons-card>

      <v-ons-card v-if="(newMix.description || newMix.additionally)">
        <div class="stowage">
          <div class="app-card">
            <!--
            <div class="card-head">
              <i class="material-icons card-icon">create</i>
              <span class="card-title">Описание</span>
            </div>
            -->
            <div class="card-container">
              <div class="description" v-html="newMix.description">{{newMix.description}}</div>
              <div class="additionally" v-html="newMix.additionally">{{newMix.additionally}}</div>
            </div>
          </div>
        </div>
      </v-ons-card>
    </div>
  </v-ons-page>
</template>
<script src="./index.js"></script>
<style>
  .tobacco-list{}
  .tobacco-list .tobacco-item{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    margin-bottom: 10px;
    padding-bottom: 10px;
  }
  .tobacco-list .tobacco-item:last-child {
    margin-bottom: 0px;
    padding-bottom: 0px;
  }
  .tobacco-list .tobacco-item:after{
    content: '';
    width: 100%;
    height: 1px;
    background-color: #d0d0d0;
    position: absolute;
    bottom: 0px;
  }
  .tobacco-list .tobacco-item:last-child:after{
    display: none;
  }
  .tobacco-list .tobacco-item .info{
    padding-left: 20px;
  }
  .tobacco-list .tobacco-item .info .flavor{
    font-size: 22px;
    font-weight: bold;
    display: block;
  }
  .tobacco-list .tobacco-item .info .vendor{}

  .tobacco-page .additionally{
    padding-top: 10px;
  }
</style>
