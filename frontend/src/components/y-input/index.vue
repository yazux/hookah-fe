<template>
  <div
    class="y-field"
    :class="[fieldClasses]"
  >
    <label v-bind:for="componentId">{{$props.label}}</label>
    <input
      class="y-input"
      v-model="componentValue"
      v-bind:type="$props.type"
      v-bind="attributes"
      v-on="listeners"
      @focus="onFocus"
      @blur="onBlur">
  </div>
</template>
<script src="./index.js"></script>
<style>
  .y-field {
    width: 100%;
    margin: 4px 0 14px;
    padding-top: 16px;
    display: flex;
    position: relative;
    font-family: inherit;
  }
  .y-field .y-input {
    height: 32px;
    padding: 0;
    display: block;
    flex: 1;
    border: none;
    background: none;
    transition: .4s cubic-bezier(.25,.8,.25,1);
    transition-property: font-size,padding-top,color;
    font-family: inherit;
    font-size: 1px;
    line-height: 32px;
  }
  .y-field.focused .y-input, .y-field.has-value .y-input{
    font-size: 16px;
  }
  .y-field:after, .y-field:before{
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 1;
    transition: border .3s cubic-bezier(.4,0,.2,1),opacity .3s cubic-bezier(.4,0,.2,1),transform 0s cubic-bezier(.4,0,.2,1) .3s;
    will-change: border,opacity,transform;
    content: " ";
  }
  .y-field:after {
    height: 1px;
    background-color: rgba(0,0,0,.42);
  }
  .y-field label {
    position: absolute;
    top: 23px;
    left: 0;
    pointer-events: none;
    transition: .4s cubic-bezier(.25,.8,.25,1);
    transition-duration: .3s;
    font-size: 16px;
    line-height: 20px;
  }
  .y-field.focused label, .y-field.has-value label {
    pointer-events: auto;
    top: 0;
    opacity: 1;
    font-size: 12px;
  }
</style>
