import Vue from 'vue'
import Vuex from 'vuex'

// this.$store
Vue.use(Vuex);

const storage = {
    fetch() {
        const arr = [];
        if (localStorage.length > 0) {
            for (let i = 0; i < localStorage.length; i++) {
                if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
                    // JSON.parse: string을 객체로 변환해주는 api
                    arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                }
            }
        }
        return arr;
    },
    // fetch: function() {
    //
    // }
}

export const store = new Vuex.Store({
    state: {
        // headerText: 'TODO it!',
        todoItems: storage.fetch()
    }
});