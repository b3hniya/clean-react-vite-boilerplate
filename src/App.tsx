import { Route, Routes } from 'react-router-dom'
import { Greeting } from '@/presentation/greetingModule/pages/Greeting'
import { AnotherPage } from '@/presentation/anotherModule/pages/AnotherPage'
import { TranslationTest } from './presentation/translationModule/pages/TranslationTest'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Greeting />} />
      <Route path="/another-page" element={<AnotherPage />} />
      <Route path="/translation-test" element={<TranslationTest />} />
    </Routes>
  )
}

export default App
