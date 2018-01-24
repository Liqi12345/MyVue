import Popupt from './Popupt.vue'

const Public = {
    install: (Vue) => {
        Vue.components('name', Popupt)
    }
}
export default Public