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
    },
    mutations: {
        addOneItem(state, todoItem) {
            // console.log('received');
            const obj = { completed: false, item: todoItem };
            // JSON.stringify: 자바스크립트 객체를 string으로 변환해주는 api
            // localStorage.setItem(this.newTodoItem, obj);
            localStorage.setItem(todoItem, JSON.stringify(obj));
            state.todoItems.push(obj);
        },
        removeOneItem(state, payload) {
            console.log('received');
            localStorage.removeItem(payload.todoItem.item);
            // splice: 원본 수정 O, slice: 원본 수정 X
            state.splice(payload.index, 1);
        },
    }
});