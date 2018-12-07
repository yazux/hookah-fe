import yInput from '../../components/y-input/index.vue';
export default {
  name: 'auth',
  props: [],
  components: {yInput},
  data() {
    return {
      form: {
        email: '',
        password: '',
        password_confirm: ''
      }
    }
  },
  created() {},
  computed: {
    routeAfterAuth() {
      return this.$store.state.routeAfterAuth;
    }
  },
  methods: {
    login() {
      this.$router.push({name: 'Login'});
    },
    signup(e) {
      e.preventDefault();
      this.$store.commit('showProgressBar');
      this.$store.dispatch('profile/signup', this.form).then(r => {
        this.$store.commit('hideProgressBar');
        this.$emit('signup', r);
        if (r && this.routeAfterAuth) this.$router.push(this.routeAfterAuth);
      });
    }
  },
}
