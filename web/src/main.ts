
import App from './App.vue'
 //routes
import router from "./router/index";
//pinia
import pinia from '@/stores/index' 
// 样式
import '@/styles/index.scss'
import 'element-plus/dist/index.css'
// icon
import { registerIcons } from '@/utils/common'
// mitt
import mitt from 'mitt'
//引入echarts
import * as echarts from 'echarts';
//  引入 markdownEditor
import VueMarkdownEditor from '@/utils/mdEditor';

const app = createApp(App)

//routes 
app.use(router)  
//pinia
app.use(pinia)  
//放入全局
app.config.globalProperties.$echarts = echarts

registerIcons(app) // icons
    // modules start mark, Please do not remove.
app.config.globalProperties.eventBus = mitt();

// makdown
app.use(VueMarkdownEditor);

app.mount('#app')
