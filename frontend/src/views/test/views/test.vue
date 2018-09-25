<template>
  <v-ons-page>
    <v-ons-navigator swipeable swipe-target-width="200px" :page-stack="pageStack" :pop-page="goBack"></v-ons-navigator>
    <div>
      <h1>Закладки</h1>
    </div>
  </v-ons-page>
</template>
<script>
  export default {
    name: 'test',
    data () {
      return {
        pageStack: [],
        title: 'Закладки'
      }
    },
    methods: {
      goBack() {
        this.$router.push({ name: this.$route.matched[this.$route.matched.length - 2].name });
      },
    },
    created: function() {
      console.log('test');
      this.$store.commit('setTitle', this.title);
    },
  }
</script>
