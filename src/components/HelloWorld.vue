<template>
  <div class="hello">
    <h3>TODO</h3>
    <div v-if="!Editing">
      <input type="text" v-model="todo" />
      <button type="Submit" @click="addtoto()">add</button>
    </div>
    <div v-else>
      <input type="text" v-model="todo" />
      <button type="Submit" @click="update()">update</button>
    </div>
    <ul>
      <li v-for="(todo, index) in todos" v-bind:key="todo">
        {{ todo }}
        <button type="Submit" @click="edit(todo, index)">edit</button>
        <button type="Submit" @click="delet(index)">delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  components: {},
  name: "HelloWorld",
  data() {
    return {
      Editing: false,
      selectedindex: null,
      todo: "",
      todos: [""],
    };
  },
  methods: {
    addtoto() {
      this.todos.push(this.todo);
      this.todo = "";
    },
    edit(todo, index) {
      this.todo = todo;
      this.selectedindex = index;
      this.Editing = true;
    },
    update() {
      this.todos.splice(this.selectedindex, 1, this.todo);
      this.Editing = false;
    },
    delet(index) {
      this.todos.splice(index, 1);
    },
  },
};
</script>
