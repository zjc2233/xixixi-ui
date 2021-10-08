// 整个包的入口
// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
// 统一导出
// 导入颜色选择器组件
import Button from './button'
import Dialog from './dialog'
import Input from './input'
import Checkbox from './checkbox'
import Radio from './radio'
import RadioGroup from './radio-group'
import Switch from './switch'
import CheckboxGroup from './checkbox-group'
import Form from './form'
import FormItem from './form-item'
import Icon from './icon'
import Toast from './toast'
import InputNumber from './input-number'
import Select from './select'
import '../public/theme/font/iconfont.css'
import './theme/index.scss'

// 存储组件列表
const components = [
  Button,
  Dialog,
  Input,
  Checkbox,
  Radio,
  RadioGroup,
  Switch,
  CheckboxGroup,
  Form,
  FormItem,
  Icon,
  // Toast,
  // InputNumber,
  // Select
]
const install = function (Vue, options = {}) {
  // 全局注册所有的组件
  components.forEach((item) => {
    Vue.component(item.name, item)
  })
}

// Vue.prototype.$message = Message;
// Vue.prototype.$notice = Notice;

// 判断是否是直接引入文件,如果是，就不用调用 Vue.use()
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  Button,
  Dialog,
  Input,
  Checkbox,
  Radio,
  RadioGroup,
  Switch,
  CheckboxGroup,
  Form,
  FormItem,
  Icon,
  Toast,
  InputNumber,
  Select,
}
// export { default as Button } from './button'
// export { default as Dialog } from './dialog'
// export { default as Input } from './input'
// export { default as Checkbox } from './checkbox'
// export { default as Radio } from './radio'
// export { default as RadioGroup } from './radio-group'
// export { default as Switch } from './switch'
// export { default as CheckboxGroup } from './checkbox-group'
// export { default as Form } from './form'
// export { default as FormItem } from './form-item'
// export { default as Icon } from './icon'
// export { default as Toast } from './toast'
// export { default as InputNumber } from './input-number'
// export { default as Select } from './select'
