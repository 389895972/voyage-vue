import Cookies from 'js-cookie'
const routes = {
    state: {
        language: Cookies.get('language') || 'zh'
    },
    getters: {
        language: state => {
            return state.language
        }
    },
    mutations: {
        set_language: (state, language) => {
            state.language = language
            Cookies.set('language', language)
        }
    }
}
export default routes