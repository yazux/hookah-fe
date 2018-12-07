export default {
    name: 'toolbar',
    backTitle: 'Back',
    props: ['title', 'hide-back-btn'],
    computed: {
      backButton() {
        return this.$store.state.backButton;
      }
    },
    data() {
      return {}
    },
    created() {},
  }