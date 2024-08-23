import {createRouter, createWebHistory} from "vue-router"
import QuizesView  from "@/view/QuizesView.vue"
import QuizView from "@/view/QuizView.vue"

const router = createRouter (
    {
        history: createWebHistory(import.meta.env.BASE_URL),
        routes:
        [
            {
                path: "/",
                name: "home",
                component: QuizesView 
            },

            {
                path: "/quiz/:id",
                name: "quizes",
                component:QuizView
            }

        ],
    }
)

export default router