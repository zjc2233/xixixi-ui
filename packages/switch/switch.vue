<template>
  <div class="xxx-switch" :class="{'is-checked': value}" @click="handleClick">
    <input
      class="xxx-switch__input"
      type="checkbox"
      :name="name"
      ref="input"
    >
    <span class="xxx-switch__core" ref="core">
      <span class="xxx-switch__button"></span>
    </span>
  </div>
</template>

<script>
export default {
  name: 'XxxSwitch',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    activeColor: {
      type: String,
      default: ''
    },
    inactiveColor: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  },
  methods: {
    async handleClick () {
      this.$emit('input', !this.value)
      // 点击的时候，还需要修改背景色
      // console.log(this.value)
      // 等待value发生了改变，在setColor
      // 数据修改后，等待DOM更新，在修改按钮的颜色
      await this.$nextTick()
      this.setColor()
      this.$refs.input.checked = this.value
    },
    setColor () {
      if (this.activeColor || this.inactiveColor) {
        const color = this.value ? this.activeColor : this.inactiveColor
        // console.log(color)
        this.$refs.core.style.borderColor = color
        this.$refs.core.style.backgroundColor = color
      }
    }
  },
  mounted () {
    // 修改开关的颜色
    this.setColor()
    // 控制checkbox的checkbox
    this.$refs.input.checked = this.value
  }
}
</script>
