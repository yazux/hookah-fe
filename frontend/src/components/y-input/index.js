export default {
  name: 'y-input',
  props: {
    id: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    value: {
      type: String,
      default: ''
    },
    attributes: {
      type: Object,
      default: () => {}
    },
    label: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      componentValue: '',
      componentId: '',
      focused: false,
      hasValue: false,
    }
  },
  computed: {
    listeners () {
      let l = {...this.$listeners};
      delete l.input;
      return l;
    },
    fieldClasses () {
      return {
        'focused': this.focused,
        'has-value': this.hasValue,
        //'md-inline': this.mdInline,
        //'md-clearable': this.mdClearable,
        //'md-highlight': this.MdField.highlighted,
        //'md-disabled': this.MdField.disabled,
        //'md-required': this.MdField.required,
        //'md-has-placeholder': this.MdField.placeholder,
      }
    }
  },
  watch: {
    '$prop.value'() {
      this.getId();
    },
    '$prop.value'(newValue) {
      this.componentValue = newValue;
    },
    'componentValue'(newValue) {
      this.$emit('input', newValue);
      this.$emit('change', newValue);

      this.checkValue();
    }
  },
  methods: {
    onFocus() {
      this.focused = true;
      this.checkValue();
    },
    onBlur() {
      this.focused = false;
      this.checkValue();
    },
    getId() {
      this.componentId = (this.$props.id) ? this.$props.id : 'y-input-' + this._uid;
      this.$props.attributes.id = this.componentId;
    },
    checkValue() {
      this.hasValue = (this.value && this.value.length) ? true : false;
    },
    init() {
      this.$nextTick(() => {});
    }
  },
  created () {
    this.init();
  },
  beforeDestroy () {},
}
