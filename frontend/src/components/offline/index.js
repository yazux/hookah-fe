export default {
    name: 'offline',
    props: [],
    components: {},
    data () {
      return {
        status: true
      }
    },
    computed: {},
    watch: {},
    methods: {
      change() {
        return this.status = (typeof window.navigator.onLine === 'undefined') ? true : window.navigator.onLine;
      }
    },
    created: function() {
      this.$nextTick(() => {
        window.addEventListener('online',  () => this.change());
        window.addEventListener('offline', () => this.change());
      });
    }
  }