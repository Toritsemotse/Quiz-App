<script setup>
    import {defineEmits} from 'vue';
    
    const emit = defineEmits(["selectedOption"])
    
    const emitSelectedOption = (isCorrect) => {
        emit("selectedOption", isCorrect)
    }
    const {question} = defineProps(['question'])

    
</script>


<template>
    <div>
        <div class="question-container">
            <h1 class="question"> {{ question.text }}</h1>
        </div>
        <div class="option-container">
            <div class="option" v-for="option in question.options" :key="option.id" @click="emitSelectedOption(option.isCorrect)">
            <p class="option-label">{{option.label}}</p>
                <div class="option-value">
                    <p>{{option.text}}</p>
                </div>
            </div>

        </div>
    </div>
</template>

<style scoped>
    .question-container{
        margin-top:20px;
    }

    .question {
        margin-bottom: 20px;
        font-size: 30px;
    }

    .option {
        display: flex;
        cursor:pointer;
        margin-bottom: 20px;
    }

    .option-label{
        height: 50px;
        background-color: bisque;
        width: 50px;
        font-size: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .option-value {
        background-color: rgb(244,233,233);
        width: 100%;
        padding: 0 20px ;
        font-size: 30px;
    }
</style>