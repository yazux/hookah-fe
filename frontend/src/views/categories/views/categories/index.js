export default {
    name: 'categories',
    data () {
      return {
        pageStack: [],
        title: 'Категории'
      }
    },
    computed: {
        categories() {
          return this.$store.state.categories.categories;
        }
    },
    watch: {
        '$route.name'(name) {
            if (name === 'Categories') this.init();
        }
    },
    methods: {
        init() {
            this.$store.commit('setTitle', this.title);
            if (!this.categories.length) {
                this.$store.commit('showProgressBar');
                this.$store.dispatch('categories/getCategories').then(() => {
                    this.$store.commit('hideProgressBar');
                });
            }
        },
        toCategory(category) {
            this.$router.push({name: 'Category', params: {id: category.id}});
        }
    },
    created: function() {
        this.init();
    },
}