import cartVendor from './../../../../components/cart-vendor/index.vue';
export default {
    name: 'vendor',
    components: {
      cartVendor
    },
    data () {
      return {
        title: 'Производители',
        vendor: false,
      }
    },
    computed: {
      vendors() {
        return this.$store.state.vendors.vendors.data;
      }
    },
    watch: {
      'vendors'() {
        this.getVendor();
      },
      '$route.params.id'() {
        this.getVendor();
      }
    },
    methods: {
      getVendor() {
        if (!this.vendors.length) return false;
        this.vendors.map(item => {
          if (item.id == this.$route.params.id) this.vendor = Object.assign({}, item);
        });
        this.$store.commit('setTitle', this.vendor.name);
      },
      init() {
        this.$store.commit('setTitle', this.title);
        if (!this.vendors.length) {
          this.$store.commit('showProgressBar');
          this.$store.dispatch('vendors/getVendors').then(() => {
            this.$store.commit('hideProgressBar');
            this.getVendor();
          });
        } else {
          this.getVendor();
        }
      },
    },
    created: function() {
      this.init();
    },
}