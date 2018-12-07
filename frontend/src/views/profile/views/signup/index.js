import signup from './../../../../components/signup/index.vue';
export default {
  components: {signup},
  data () {
    return {
      pageStack: [],
      title: 'Регистрация'
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
