<template>
    <div>
        <h3>基础用法</h3>
        <xxx-card>
            <xxx-button>default</xxx-button>
            <xxx-button type="primary">primary</xxx-button>
            <xxx-button type="info">info</xxx-button>
            <xxx-button type="success">success</xxx-button>
            <xxx-button type="warning">warning</xxx-button>
            <xxx-button type="danger">danger</xxx-button>
            <p></p>
            <xxx-button round >default</xxx-button>
            <xxx-button round type="primary">primary</xxx-button>
            <xxx-button round type="info">info</xxx-button>
            <xxx-button round type="success">success</xxx-button>
            <xxx-button round type="warning">warning</xxx-button>
            <xxx-button round type="danger">danger</xxx-button>
            <p></p>
            <xxx-button circle >圆</xxx-button>
            <xxx-button circle type="primary">圆</xxx-button>
            <xxx-button circle type="info">圆</xxx-button>
            <xxx-button circle type="success">圆</xxx-button>
            <xxx-button circle type="warning">圆</xxx-button>
            <xxx-button circle type="danger">圆</xxx-button>
            <template v-slot:code>
                <pre v-highlightjs><code class="vue">{{code1}}</code></pre>
            </template> 
        </xxx-card>
        <h3>禁用状态</h3>
        <xxx-card>
            <xxx-button disabled >default</xxx-button>
            <xxx-button disabled type="primary">primary</xxx-button>
            <xxx-button disabled type="info">info</xxx-button>
            <xxx-button disabled type="success">success</xxx-button>
            <xxx-button disabled type="warning">warning</xxx-button>
            <xxx-button disabled type="danger">danger</xxx-button>
            <template v-slot:code>
                <pre v-highlightjs><code class="vue">{{code2}}</code></pre>
            </template> 
        </xxx-card>
        <h3>不同尺寸</h3>
        <xxx-card>
            <xxx-button>默认</xxx-button>
            <xxx-button type="medium">中等</xxx-button>
            <xxx-button type="small">小型</xxx-button>
            <xxx-button type="mini">超小</xxx-button>
            <p></p>
            <xxx-button round>默认</xxx-button>
            <xxx-button round type="medium">中等</xxx-button>
            <xxx-button round type="small">小型</xxx-button>
            <xxx-button round type="mini">超小</xxx-button>
            <template v-slot:code>
                <pre v-highlightjs><code class="vue">{{code3}}</code></pre>
            </template> 
        </xxx-card>

    </div>
</template>

<script>
import btn from "../../../packages/button/button.vue";
import Vue from "vue";
import VueHighlightJS from "vue-highlightjs";

Vue.use(VueHighlightJS);
export default {
    data() {
        return {
            code1: `
<xxx-button>default</xxx-button>
<xxx-button type="primary">primary</xxx-button>
<xxx-button type="success">success</xxx-button>
<xxx-button type="warning">warning</xxx-button>
<xxx-button type="danger">danger</xxx-button>

<xxx-button round >default</xxx-button>
<xxx-button round type="primary">primary</xxx-button>
<xxx-button round type="success">success</xxx-button>
<xxx-button round type="warning">warning</xxx-button>
<xxx-button round type="danger">danger</xxx-button>

<xxx-button circle >圆</xxx-button>
<xxx-button circle type="primary">圆</xxx-button>
<xxx-button circle type="success">圆</xxx-button>
<xxx-button circle type="warning">圆</xxx-button>
<xxx-button circle type="danger">圆</xxx-button>    
                `
                .trim(),
            code2: `
<xxx-button disabled >default</xxx-button>
<xxx-button disabled type="primary">primary</xxx-button>
<xxx-button disabled type="success">success</xxx-button>
<xxx-button disabled type="warning">warning</xxx-button>
<xxx-button disabled type="danger">danger</xxx-button>   
                `
                .trim(),
            code3: `
<xxx-button>默认</xxx-button>
<xxx-button type="medium">中等</xxx-button>
<xxx-button type="small">小型</xxx-button>
<xxx-button type="mini">超小</xxx-button>

<xxx-button round>默认</xxx-button>
<xxx-button round type="medium">中等</xxx-button>
<xxx-button round type="small">小型</xxx-button>
<xxx-button round type="mini">超小</xxx-button>  
                `
                .trim(),
        };
    },
    components: {
        "xxx-button": btn,
    },
};
</script>


