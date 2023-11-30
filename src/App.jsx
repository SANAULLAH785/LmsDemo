import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import MyProducts from './pages/MyProducts'
import { Route, Routes } from 'react-router-dom'
import CreateQuiz from './pages/CreateQuiz'
import NoPage from './pages/NoPage'
import CreateMCQs from './components/Temp'
// import CreateQuestions from './pages/CreateQuestions'
// import CreateQuestion from './pages/QuestionSection/CreateQuestion'
import QuizHeaderSection from './pages/QuizSection/QuizHeaderSection'
function App() {
  console.log('app component')

  return (
    <>
      <Routes>
        <Route path="/createquiz" element={<CreateQuiz />}/>
        <Route path="/" element={<MyProducts />}/>
        <Route path="/createquiz/createquestions" element={<QuizHeaderSection />}/>


       
        
        <Route path="*" element={<NoPage />} />
      </Routes>
      {/* <MyProducts/> */}

    </>
  )
}

export default App
