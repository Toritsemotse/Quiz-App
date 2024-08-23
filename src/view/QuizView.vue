<script setup>
    import Question from '@/components/Question.vue';
    import QuizHeader from '@/components/QuizHeader.vue';
    import { useRoute } from 'vue-router';
    import {ref , computed} from  "vue"
    import quizes from "@/assets/data/quizes.json"
    import Result from '@/components/Result.vue';

    const route = useRoute();

    const quizId = parseInt(route.params.id);

    const quiz = quizes.find(q => q.id === quizId)
    const showResult = ref(false)

    const currentQuestionIndex = ref(0)
    const numberOfCorrectAnswer = ref(0)

    const questionStatus = computed(() => `${currentQuestionIndex.value}/${quiz.questions.length}`
 )
    const barPercentage = computed(() => {
        return `${currentQuestionIndex.value/quiz.questions.length * 100}% `
    })

    const onOptionSelected = (isCorrect) => {
        if(isCorrect){
            numberOfCorrectAnswer.value++;
        }

        if(quiz.questions.length -1 === currentQuestionIndex.value) {
            showResult.value = true
        }
        currentQuestionIndex.value++

    
    }
</script>

<template>
    <div>
       
       <div>
        <QuizHeader
         :questionStatus="questionStatus"
         :barPercentage="barPercentage"
        />
       </div>

       <div>
        <Question
        v-if="!showResult" 
        :question="quiz.questions[currentQuestionIndex]" 
        @selectedOption="onOptionSelected" 
        />
        <Result 
            v-else
            :quizQuestionLength="quiz.questions.length"
            :numberOfCorrectAnswer="numberOfCorrectAnswer"
        />
       </div>
       
    </div>
</template>
