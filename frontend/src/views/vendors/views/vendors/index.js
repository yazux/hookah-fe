export default {
    name: 'vendors',
    data () {
      return {
        title: 'Производители'
      }
    },
    computed: {
      vendors() {
        return this.$store.state.vendors.vendors.data;
      }
    },
    watch: {
      '$route.name'(name) {
        if (name === 'Vendors') this.init();
      }
    },
    methods: {
      init() {
        this.$store.commit('setTitle', this.title);
        if (!this.vendors.length) {
          this.$store.commit('showProgressBar');
          this.$store.dispatch('vendors/getVendors').then(() => {
            this.$store.commit('hideProgressBar');
          });
        }
      },
      toVendor(vendor) {
        this.$router.push({name: 'Vendor', params: {id: vendor.id}});
      }
    },
    created: function() {
      this.init();
    },
}