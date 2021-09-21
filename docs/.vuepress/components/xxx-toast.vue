<template>
  <div>
    <h3>icon</h3>
    <xxx-card>
        <xxx-button @click="open1">提示</xxx-button>
      <template v-slot:code>
        <pre v-highlightjs><code class="vue">{{code1}}</code></pre>
      </template>
    </xxx-card>
  </div>
</template>

<script>
import "../../static/fonts/iconfont.css";
import Button from "../../../packages/button/button.vue";
import Message from "../../../packages/toast/index"
import Vue from "vue";
import VueHighlightJS from "vue-highlightjs";

Vue.use(VueHighlightJS);
Vue.prototype.$message = Message;
export default {
  data() {
    return {
      code1: `
<xxx-icon name='share' color="red" size="20" />  
                `.trim(),
    };
  },
  components: {
    "xxx-button": Button,
  },
  methods:{
      open1(){
          this.$message({
            message: '恭喜你，这是一条成功消息',
            type: 'success'
        });
      }
  }
};
</script>
<style lang="scss">

</style>


