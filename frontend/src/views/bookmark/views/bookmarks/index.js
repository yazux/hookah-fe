import BookmarksList from './../../../../components/bookmarks-list/index.vue';
export default {
    name: 'bookmarks',
    components: {BookmarksList},
    data () {
        return {
            pageStack: [],
            title: 'Закладки'
        }
    },
    computed: {
      bookmarks() {
        return this.$store.state.bookmark.bookmarks.data;
      }
    },
    methods: {
      init() {
        this.$nextTick(() => {
          this.$store.commit('setTitle', this.title);
          this.$root.checkAuth({name: 'Bookmarks'});
          if (!this.bookmarks || !this.bookmarks.length) this.getBookmarks();
        });
      },
      getBookmarks() {
        this.$store.commit('showProgressBar');
        this.$store.dispatch('bookmark/getBookmarks').then(() => {
          this.$store.commit('hideProgressBar');
        });
      },
    },
    created: function() {
      this.init();
    },
}
