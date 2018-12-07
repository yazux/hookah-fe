export default {
  name: 'mixes-list-item',
  props: ['mix', 'show-bookmark-btn'],
  components: {},
  data () {
    return {}
  },
  computed: {},
  methods: {
    toMix(mix) {
      this.$router.push({name: 'Mix', params: {id: mix.id}, query: {showBookmarkBtn: this.$props.showBookmarkBtn}});
    }
  },
  created: function() {},
}
