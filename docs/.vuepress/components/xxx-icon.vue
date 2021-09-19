<template>
    <div>
        <h3>禁用状态</h3>
        <xxx-card>
            <i class="iconfont icon-share"></i>
            <template v-slot:code>
                <pre v-highlightjs><code class="vue">{{code2}}</code></pre>
            </template> 
        </xxx-card>

    </div>
</template>

<script>
import '../../static/fonts/iconfont.css'
import icon from "../../../packages/icon/icon.vue";
import Vue from "vue";
import VueHighlightJS from "vue-highlightjs";

Vue.use(VueHighlightJS);
export default {
    data() {
        return {
            code2: `
<xxx-button disabled >default</xxx-button>  
                `
                .trim(),
        };
    },
    components: {
        "xxx-icon": icon,
    },
};
</script>


