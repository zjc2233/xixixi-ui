<template>
  <i :class="'xxx-icon-' + name"></i>
</template>

<script>
  export default {
    name: 'XxxIcon',

    props: {
      name: String
    }
  };
</script>