export default {
  name: 'rating',
  props: ['type', 'user-id', 'mix-id', 'vendor-id', 'user-rating', 'value'],
  components: {},
  data () {
    return {
      URV: {
        id: null,
        mix_id: null,
        vendor_id: null,
        user_id: null,
        rating: 0
      },
      load: false
    }
  },
  watch: {
    '$props.userRating'(value) {
      this.getRating();
    }
  },
  computed: {},
  methods: {
    getRating() {
      this.$nextTick(() => {
        if (this.$props.mixId)    this.URV.user_id = this.$props.mixId;
        if (this.$props.vendorId) this.URV.user_id = this.$props.vendorId;
        if (this.$props.userId)   this.URV.user_id = this.$props.userId;

        if (this.$props.userRating && this.$props.userRating[0])
          this.URV = Object.assign({}, this.$props.userRating[0]);
      });
    },
    setRating(value) {
      if (this.load || (this.URV.id && parseInt(this.URV.rating) === parseInt(value))) return;
      this.load = true;

      this.changeMixRatingInStorage(value);
      this.URV.rating = value;

      if (this.URV.id) this.putRating(value);
      else  this.postRating(value);
    },
    postRating(value) {
      this.$store.dispatch('rating/postMixRatings', {
        id: null,
        mix_id: this.$props.mixId,
        user_id: this.userId,
        rating: value
      }).then(r => {
        this.load = false;
        this.URV = Object.assign({}, r);
      });
    },
    putRating(value) {
      this.$store.dispatch('rating/putMixRatings', {
        id: this.URV.id,
        mix_id: this.$props.mixId,
        user_id: this.userId,
        rating: value
      }).then(r => {
        this.load = false;
        this.URV = Object.assign({}, r);
      });
    },
    changeMixRatingInStorage(value) {
      let newFullValue = this.$props.value;
      //если пользователь лайкнул
      if (parseInt(value)) {
        if (this.URV.id) { //было ли старое значение (лайкал/дизлайкал раньше)
          if (parseInt(this.URV.rating)) { //если старая оценка - лайк
            //значит сейчас дизлайк
            newFullValue = parseInt(newFullValue) - 2;
          } else { //если старая оценка - дизлайк
            //значит сейчас лайк
            newFullValue = parseInt(newFullValue) + 2;
          }
        } else { //если не было старого значения, значит лайкает впервые
          newFullValue = parseInt(newFullValue) + 1;
        }
      } else { //если пользователь дизлайкнул
        if (this.URV.id) { //было ли старое значение (лайкал/дизлайкал раньше)
          if (parseInt(this.URV.rating)) { //если старая оценка - лайк
            //значит сейчас дизлайк
            newFullValue = parseInt(newFullValue) - 2;
          } else { //если старая оценка - дизлайк
            //значит сейчас лайк
            newFullValue = parseInt(newFullValue) + 2;
          }
        } else { //если не было старого значения, значит дизлайкает впервые
          newFullValue = parseInt(newFullValue) - 1;
        }
      }
      this.$store.commit('mix/setMixRating', newFullValue);
    }

  },
  created: function() {
    this.getRating();
  },
}
