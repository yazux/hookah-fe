import auth from './../../../../components/auth/index.vue';
export default {
  name: 'login',
  components: {auth},
  data () {
    return {
      pageStack: [],
      title: 'Авторизация'
    }
  },
  methods: {
    goBack() {
      this.$router.push({ name: this.$route.matched[this.$route.matched.length - 2].name });
    }
  },
  created: function() {
    this.$store.commit('setTitle', this.title);
    this.$nextTick(() => {});
  },
}
