export default {
    name: 'Mix',
    data () {
      return {
        pageStack: [],
        title: 'Макс',
        category: false
      }
    },
    computed: {
        mix() {
            return this.$store.state.mix.mix;
        },
        mixes() {
            return this.$store.state.mix.mixes.data;
        },
    },
    watch: {
        '$route.name'(name) {
            if (name === 'Mix') this.init();
        },
        '$route.id'() {
            this.init();
        },
        '$route.mix_id'() {
            this.init();
        },  
    },
    methods: {
        init() {
            this.getMix();
        },
        getMix() {
            this.$store.commit('showProgressBar');
            this.$store.dispatch('mix/getMix', this.$route.params.id).then(() => {
                this.$store.commit('hideProgressBar');
            });
        }
    },
    created: function() {
        this.init();
    },
}