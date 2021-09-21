<template>
<div>
  <i :class="['icon', 'xxx-icon-' + name]" :style="{color, 'font-size': size+'px'}"></i>
  <span v-if="showText">{{name}}</span>
</div>
</template>

<script>
  export default {
    name: 'XxxIcon',

    props: {
      name: String,
      color: String,
      size: Number,
      showText:{
          type: Boolean,
          default: false
      },
    },
  };
</script>