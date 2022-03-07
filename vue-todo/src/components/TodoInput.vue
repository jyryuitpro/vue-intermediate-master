<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
    <span class="addContainer" v-on:click="addTodo">
      <i class="fas fa-plus addBtn"></i>
    </span>
    <!-- use the modal component, pass in the prop -->
    <ModalAlert v-if="showModal" @close="showModal = false">
      <!--
        you can use custom content here to overwrite
        default content
      -->
      <h3 slot="header">
        경고!
        <i class="closeModalAlertBtn fas fa-times" @click="showModal = false"></i>
      </h3>
      <div slot="body">아무것도 입력하지 않으셨습니다.</div>
    </ModalAlert>
  </div>
</template>

<script>
import ModalAlert from './common/ModalAlert.vue'

export default {
  name: "TodoInput",
  data() {
    return {
      newTodoItem: '',
      showModal: false
    }
  },
  methods: {
    addTodo() {
      if (this.newTodoItem !== '') {
        // this.$emit('이벤트 이름', 인자1, 인자2, ...);
        this.$emit('addTodoItem', this.newTodoItem);
        this.clearInput();
      } else {
        this.showModal = !this.showModal;
      }
    },
    clearInput() {
      this.newTodoItem = '';
    }
  },
  components: {
    'ModalAlert': ModalAlert
  }
}
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478FB, #8763FB);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
.closeModalAlertBtn {
  color: #42b983;
}
</style>