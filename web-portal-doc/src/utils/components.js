import ScrollListener from '@/components/base/ScrollListener.vue' 
import YsHeader from '@/components/common/YsHeader.vue' 
import YsLeftNav from '@/components/common/YsLeftNav.vue' 
import YsGuideRight from '@/components/common/YsGuideRight.vue'
export default (Vue)=>{
  Vue.component("ScrollListener", ScrollListener)
  Vue.component("YsHeader", YsHeader)
  Vue.component("YsLeftNav", YsLeftNav)
  Vue.component("YsGuideRight", YsGuideRight)
}