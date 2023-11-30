import { configureStore } from '@reduxjs/toolkit'
// import contentSlice from './contentSlice'
// import authSlice from './authSlice'
import createQuizSlice from './createQuizSlice'
import createQuestionSlice from './createQuestionSlice'
export const store = configureStore({
  reducer: {
    content:createQuizSlice,
    questionsState: createQuestionSlice,
    // fetchQuiz: fetchQuizSlice,
    // authntication:authSlice
  },
})

export default store