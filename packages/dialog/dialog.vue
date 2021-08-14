<template>
  <!-- 对话框的遮罩 .self代表只有点击自己才触发 -->
  <transition name="dialog-fade">
    <div class="xxx-dialog__wrapper" v-show="visible" @click.self="handleClose">
      <div class="xxx-dialog" :style="{width, marginTop: top}">
        <div class="xxx-dialog__header">
          <slot name="title">
            <span class="xxx-dialog__title">{{title}}</span>
          </slot>
          <button class="xxx-dialog__headerbtn" @click="handleClose">
            <i class="xxx-icon-close"></i>
          </button>
        </div>
        <div class="xxx-dialog__body">
          <!-- 默认插槽 -->
          <slot></slot>
        </div>
        <div class="xxx-dialog__footer" v-if="$slots.footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'XxxDialog',
  props: {
    title: {
      type: String,
      default: '提示'
    },
    width: {
      type: String,
      default: '50%'
    },
    top: {
      type: String,
      default: '15vh'
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClose () {
      // console.log('哈哈')
      // this.visible = false
      this.$emit('update:visible', false)
    }
  }
}
</script>


