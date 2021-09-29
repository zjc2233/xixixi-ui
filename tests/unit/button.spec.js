import Vue from 'vue'
import { mount } from '@vue/test-utils'
// import button from '../../packages/button/button.vue'
import Button from '@pack/button/button.vue'

describe('button.vue',()=>{
    it('button类型', async ()=>{
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
        propsData: {
            type: 'warning'
        }
        }).$mount()
        console.log(vm);
        // const buttonElement = document.getElementsByClassName('xxx-button')
        // console.log(buttonElement);
        // expect(buttonElement.classList).toContain('xxx-button--warning')
        vm.$destroy()
    })
})