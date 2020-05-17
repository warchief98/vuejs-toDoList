<template>
  <div class="container py-5 border border-danger">
    <to-do-grid :toDoText="toDoText"></to-do-grid>

    <addToDo></addToDo>
  </div>
</template>

<script>

import toDoGrid from './components/ToDoGrid.vue'
import addToDo from './components/AddToDo.vue'
import { eventBus } from './main'

export default {
    data:function() {
      return {
        toDoText:[
          'go to english class',
          'cook dinner for my friends'
        ]
      }
    },

    methods:{

    },

    components:{
      toDoGrid:toDoGrid,
      addToDo:addToDo
    },

    created(){
      eventBus.$on('addNew',(todo)=>{
        this.toDoText.push(todo)
      })
    }
}
</script>

<style scoped>
  
</style>