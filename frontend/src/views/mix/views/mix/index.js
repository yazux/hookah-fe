import radialProgress from './../../../../components/radial-progress/index.vue';
import toBookmarksBtn from './../../../../components/to-bookmarks-btn/index.vue';
import rating from './../../../../components/rating/index.vue';
export default {
    name: 'Mix',
    components: {radialProgress, toBookmarksBtn, rating},
    data () {
      return {
        pageStack: [],
        title: 'Микс',
        category: false,
        newMix: {
            tobacco: false,
            stowage: false,
            liquid: false,
            coal: false,
            description: false,
            additionally: false
        }
      }
    },
    computed: {
        mix() {
            return this.$store.state.mix.mix;
        },
        mixes() {
            return this.$store.state.mix.mixes.data;
        },
        user() {
          return this.$store.state.profile.user;
        }
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
        'mix': {
          handler: function (mix) {
            this.newMix = Object.assign({}, mix);
            this.$store.commit('setTitle', mix.name);
          },
          deep: true
        }
    },
    methods: {
        init() {
            this.$store.commit('showBackBtn', true);
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
