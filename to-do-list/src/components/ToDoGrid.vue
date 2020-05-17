<template>
    <div class="row">
        <to-do 
        v-for="(duty, index) in toDoText" 
        :key="duty + index"
        >{{ duty }}
        <span slot="number">{{ (index + 1) }}</span>
        </to-do>
    </div>
</template>

<script>

import toDo from '../components/ToDo.vue'

export default {
    props:{
        toDoText:Array
    },
    components:{
        toDo:toDo
    }
}
</script>

<style>
    
</style>