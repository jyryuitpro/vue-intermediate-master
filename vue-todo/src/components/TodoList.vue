<template>
  <div>
    <transition-group name="list" tag="ul">
<!-- <li v-for="(todoItem, index) in propsdata" v-bind:key="todoItem.item" class="shadow"> -->
<!-- <li v-for="(todoItem, index) in this.$store.state.todoItems" v-bind:key="todoItem.item" class="shadow"> -->
<!-- <li v-for="(todoItem, index) in this.$store.getters.storedTodoItems" v-bind:key="todoItem.item" class="shadow"> -->
<!-- <li v-for="(todoItem, index) in this.todoItems" v-bind:key="todoItem.item" class="shadow"> -->
      <li v-for="(todoItem, index) in this.storedTodoItems" v-bind:key="todoItem.item" class="shadow">
<!-- <i class="checkBtn fas fa-check" v-bind:class="{checkBtnCompleted: todoItem.completed}" v-on:click="toggleComplete(todoItem, index)"></i> -->
        <i class="checkBtn fas fa-check" v-bind:class="{checkBtnCompleted: todoItem.completed}" v-on:click="toggleComplete({todoItem, index})"></i>
        <span v-bind:class="{textCompleted: todoItem.completed}">{{ todoItem.item }}</span>
<!-- <span class="removeBtn" v-on:click="removeTodo(todoItem, index)"> -->
        <span class="removeBtn" v-on:click="removeTodo({todoItem, index})">
          <i class="fas fa-trash-alt"></i>
        </span>
      </li>
    </transition-group>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: "TodoList",
  // props: ['propsdata'],
  methods: {
    ...mapMutations({
      removeTodo: 'removeOneItem'
    }),
    // removeTodo(todoItem, index) {
    //   console.log(todoItem, index);
      // this.$emit('removeTodoItem', todoItem, index);
      // const obj = {
      //   todoItem: todoItem,
      //   index: index
      // }
      // const obj = {
      //   todoItem,
      //   index
      // }
      // this.$store.commit('removeOneItem', {todoItem, index});
    // },
    ...mapMutations({
      toggleComplete: 'toggleOneItem'
    }),
    // toggleComplete(todoItem, index) {
    //   console.log(todoItem, index);
      // this.$emit('toggleTodoItem', todoItem, index);
      // this.$store.commit('toggleOneItem', {todoItem, index});
    // }
  },
  computed: {
    // todoItems() {
    //   return this.$store.getters.storedTodoItems;
    // }
    ...mapGetters(['storedTodoItems'])
    // ...mapGetters({
    //   todoItems: 'storedTodoItems'
    // })
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
}
.checkBtn {
  line-height: 45px;
  /* color: black; */
  color: #62acde;
  margin-right: 5px;
}
.checkBtnCompleted {
  /* color: #62acde; */
  /*color: black;*/
  color: #b3adad;
}
.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}

/* 리스트 아이템 트렌지션 효과 */
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>