export default {
    name: 'category',
    data () {
      return {
        pageStack: [],
        title: 'Категория',
        category: false
      }
    },
    computed: {
        categories() {
          return this.$store.state.categories.categories;
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
                this.$store.dispatch('categories/getCategories').then(() => {
                    this.$store.commit('hideProgressBar');
                    this.getCategory();
                });
            } else {
                this.getCategory();
            }
        },
        getCategory() {
            if (!this.categories.length) return false;
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
        },
        toMix(mix) {
            this.$router.push({name: 'Mix', params: {id: mix.id}});
        }
    },
    created: function() {
        this.init();
    },
}