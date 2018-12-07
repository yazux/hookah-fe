import yInput from '../../components/y-input/index.vue';
export default {
    name: 'auth',
    props: [],
    components: {yInput},
    data() {
        return {
          form: {
            login: '',
            password: '',
            login_auth: true
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
      signup() {
        this.$router.push({name: 'Signup'});
      },
      login(e) {
        e.preventDefault();
        this.$store.commit('showProgressBar');
        this.$store.dispatch('profile/login', this.form).then(r => {
          this.$store.commit('hideProgressBar');
          this.$emit('login', r);
          if (r && this.routeAfterAuth) this.$router.push(this.routeAfterAuth);
        });
      }
    },
}
