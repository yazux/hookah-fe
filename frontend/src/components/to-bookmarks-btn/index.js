export default {
  name: 'to-bookmarks-btn',
  props: ['mix-id', 'bookmarks'],
  components: {},
  data() {
    return {
      load: false
    }
  },
  created() {},
  computed: {
    /**
     * Текущий пользователь
     */
    user() {
      return this.$store.state.profile.user;
    },
    /**
     * Проверяет наличие переданного микса у текущего пользователя в закладках
     * @returns {boolean}
     */
    exist() {
      let result = false;
      if (!this.$props.bookmarks || !this.$props.bookmarks.length) return result;
      this.$props.bookmarks.map(item => {
        if (parseInt(this.user.id) === parseInt(item.id)) result = true;
      });
      return result;
    }
  },
  methods: {
    toBookmarks() {
      if (this.load) return;
      this.load = true;
      this.$store.commit('showProgressBar');
      if (!this.user || !this.user.id) {
        this.$store.commit('showSnackbar', ['Вам необходимо авторизоваться', 3000]);
        return;
      }

      this.$store.dispatch('bookmark/postBookmark', {
        mix_id: this.$props.mixId, user_id: this.user.id
      }).then(r => {
        this.load = false;
        this.$store.commit('hideProgressBar');
        if (r) this.$store.commit('showSnackbar', ['Микс успешно добавлен в закладки', 3000]);
      });
    },
    deleteFromBookmarks() {
      if (this.load) return;
      this.load = true;
      this.$store.commit('showProgressBar');
      if (!this.user || !this.user.id) {
        this.$store.commit('showSnackbar', ['Вам необходимо авторизоваться', 3000]);
        return;
      }

      this.$store.dispatch('bookmark/deleteBookmark', {
        mix_id: this.$props.mixId, user_id: this.user.id
      }).then(r => {
        this.load = false;
        this.$store.commit('hideProgressBar');
        if (r) this.$store.commit('showSnackbar', ['Микс успешно удалён из закладок', 3000]);
      });
    },
  }
}
