
<script setup>

import {RouterView} from "vue-router"
import QuizesView from "./view/QuizesView.vue"

</script>


<template>
  <div class="container">
    <RouterView/>
   
  </div>
</template>


<style scoped>
    .container {
  max-width: 1000px;
  margin: 0 auto;
  }

</style>

<!-- <script setup>
import q from "./assets/data/quizes.json"
import {ref, watch} from "vue"
import Card from "./components/Card.vue"

const quizes = ref(q)

const search = ref("")

watch(search, () => {
  quizes.value = q.filter(quiz => quiz.name.toLowerCase().includes(search.value.toLowerCase()))
})
</script>

<template>
  <div >
    <header>
      <h1>Quizes</h1>
      <input v-model.trim="search" type="text" placeholder="Search...">
    </header>
    
    <div class="options-container">
      <Card  v-for="quiz in quizes" :key="quiz.id" :quiz="quiz"/>
      
    </div>
    
  </div>

</template>

<style scoped>

  header{
    margin-top: 30px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;

  }

  header h1{
    font-weight: bold;
    font-size: 40px;
    margin-right: 30px;
    padding-left: 10px
  }

  header input{
    border: none;
    padding: 10px;
    border-radius: 5px;
    background-color: rgba(128, 128, 128, 0.1);
  }

  .options-container{
    display: flex;
    flex-wrap: wrap;
    margin-top: 40px;
  }

  /* CARDS */

  

</style> -->