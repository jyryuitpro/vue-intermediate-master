const addOneItem = (state, todoItem) => {
    // console.log('received');
    const obj = { completed: false, item: todoItem };
    // JSON.stringify: 자바스크립트 객체를 string으로 변환해주는 api
    // localStorage.setItem(this.newTodoItem, obj);
    localStorage.setItem(todoItem, JSON.stringify(obj));
    state.todoItems.push(obj);
}

const removeOneItem = (state, payload) => {
    // console.log('received');
    localStorage.removeItem(payload.todoItem.item);
    // splice: 원본 수정 O, slice: 원본 수정 X
    state.todoItems.splice(payload.index, 1);
}

const toggleOneItem = (state, payload) => {
    console.log(state.todoItem, payload.index);
    // todoItem.completed = !todoItem.completed;
    state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
    localStorage.removeItem(payload.todoItem.item);
    localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
}

const clearAllItems = (state) => {
    localStorage.clear();
    state.todoItems = [];
}

export { addOneItem, removeOneItem, toggleOneItem, clearAllItems }