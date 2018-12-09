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
      :pop-page="$root.goBack"
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
      init() {
        this.$store.commit('setTitle', 'Производители');

        const mapRouteStack = route => (this.pageStack = route.matched.map((m) => m.components.default));
        //устанавливаем начальную страницу home
        mapRouteStack(this.$route);
        //beforeEach - реагирует на изменение $router
        this.$router.beforeEach(function (to, from, next) {
          if (mapRouteStack(to)) { return next(); }
        });
      },
    },
    created() {
      this.init();
    }
  }
</script>

<style>

</style>
