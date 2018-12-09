import mixesList from '../../../../components/mixes-list/index.vue';
export default {
    name: 'category',
    components: {mixesList},
    data () {
      return {
        pageStack: [],
        title: 'Категория',
        category: false
      }
    },
    computed: {
        categories() {
          return this.$store.state.categories.categories.data;
        },
        mixes() {
          return this.$store.state.mix.mixes.data;
        }
    },
    watch: {
        '$route.name'(name) {
            if (name === 'Category') this.init();
        },
        '$route.id'() {
            this.init();
        },
    },
    methods: {
        init() {
            this.$store.commit('setTitle', this.title);
            if (!this.categories.length) {
                this.$store.commit('showProgressBar');
                this.$store.dispatch('categories/getCategories', {filter: {"has_relation":["mixes"],"relation":[],"model":[]}}).then(() => {
                    this.$store.commit('hideProgressBar');
                    this.getCategory();
                });
            } else {
                this.getCategory();
            }
        },
        getCategory() {
            if (parseInt(this.categories.id) === parseInt(this.$route.params.id)) return false;
            this.categories.map(item => {
                if (item.id == this.$route.params.id) this.category = Object.assign({}, item);
            });
            if (!this.category) return false;
            this.$store.commit('setTitle', this.category.name);
            this.getMixes();
        },
        getMixes() {
            this.$store.commit('showProgressBar');
            let filter = {model: [], relation: [["category","id","=", this.$route.params.id]]};
            this.$store.dispatch('mix/getMixes', {filter: filter}).then(() => {
                this.$store.commit('hideProgressBar');
            });
        }
    },
    created: function() {
        this.init();
    },
}
