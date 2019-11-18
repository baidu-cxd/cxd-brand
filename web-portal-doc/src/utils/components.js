import ScrollListener from '@/components/base/ScrollListener.vue' 
import YsHeader from '@/components/common/YsHeader.vue' 
import YsLeftNav from '@/components/common/YsLeftNav.vue' 
import YsGuideRight from '@/components/common/YsGuideRight.vue'
import YsRightFixButton from '@/components/ys-design-system/YsRightFixButton.vue'
import YsInput from '@/components/ys-design-system/YsInput.vue'
import YsButton from '@/components/ys-design-system/YsButton.vue'
export default (Vue)=>{
  Vue.component("ScrollListener", ScrollListener)
  Vue.component("YsHeader", YsHeader)
  Vue.component("YsLeftNav", YsLeftNav)
  Vue.component("YsGuideRight", YsGuideRight)
  Vue.component("YsRightFixButton", YsRightFixButton)
  Vue.component("YsInput", YsInput)
  Vue.component("YsButton", YsButton)
}