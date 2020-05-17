<template>
    <div class="row">
        <div class="col text-center">
            <input 
            v-model="toDoStorage"
            @keyup.enter="addNewToDo" 
            type="text" 
            class="my-3">

            <div class="w100"></div>
            <button @click="addNewToDo" class="btn btn-success">Add new</button>
        </div>
    </div>
</template>

<script>

import { eventBus } from '../main.js'

export default {
    data:function() {
        return {
            toDoStorage:"",
        }
    },
    methods:{
        addNewToDo(){
            if(this.toDoStorage == ""){
                this.toDoStorage = ""
            }
            else{
                eventBus.$emit('addNew',this.toDoStorage)
                this.toDoStorage = ""
            }
        }
    }
}
</script>

<style scoped>
    .row{
        margin: 50px -15px;
    }    
</style>