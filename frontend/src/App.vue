<template>
  <div id="app">
    <offline></offline>
    <div v-if="progress" class="fullscreen layer-over progress-bar-container">
      <v-ons-progress-circular indeterminate></v-ons-progress-circular>
    </div>
    <toolbar :title="title"></toolbar>
    <v-ons-navigator 
      swipeable 
      swipe-target-width="200px" 
      :page-stack="pageStack" 
      :pop-page="goBack"
      id="navigator"
      animation="fade"
    ></v-ons-navigator>
    <bottom-toolbar></bottom-toolbar>
  </div>
</template>

<script>
  import offline from './components/offline/index.vue';
  import bottomToolbar from './components/bottom-toolbar/index.vue';

  export default {
    name: 'app',
    components: {offline, bottomToolbar},
    data () {
      return {
        pageStack: []
      }
    },
    computed: {
      title() {
        return this.$store.state.title;
      },
      progress() {
        return this.$store.state.progress;
      }
    },
    methods: {
      goBack() {
        this.$router.push({ name: this.$route.matched[this.$route.matched.length - 2].name });
      },
    },
    created() {
      this.$store.commit('setTitle', 'Производители');

      const mapRouteStack = route => (this.pageStack = route.matched.map(function (m) {
        return m.components.default;
      }));

      //устанавливаем начальную страницу home
      mapRouteStack(this.$route);

      //beforeEach - реагирует на изменение $router
      this.$router.beforeEach(function (to, from, next) {
        if (mapRouteStack(to)) { return next(); }
      });

    }
  }
</script>

<style>
  #app .fullscreen{
    width: 100%;
    height: calc(100% - 100px);
    bottom: 44px;
    top: 56px;
  }
  #app .layer-over {
    position: absolute;
    z-index: 999;    
  }
  #app .progress-bar-container{
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(2255,255,255,0.9);
  }
  #app .page__content{
    bottom: 44px;
    top: 56px;
  }
  #app .rating-container{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  #app .cart-title {
    font-size: 18px;
    margin: 0 0 0.2em 0;
  }
  #app .tag {
    display: inline;
    background: #f0f2f4;
    border: 1px solid #eee;
    padding: 2px 4px;
    border-radius: 4px;
    margin: 1px;
    font-size: 13px;
    line-height: 13px;
  }
  #app .tag.small {
    font-size: 11px;
    line-height: 11px;
    padding: 2px;
    border-radius: 3px;
  }
  #app .tag-container {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
</style>
