import { reactive } from 'vue'
import { useRoute } from 'vue-router'
interface metaInfoProp {
    meta: string,
    arrow: boolean
}
const getMate = (): metaInfoProp => {
    const r = useRoute()
    return reactive({
        meta: r.meta.title,
        arrow: r.meta.arrow
    })
}
export default getMate