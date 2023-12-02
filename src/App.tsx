import { Route, Routes } from "react-router-dom";
import { Greeting } from "./presentation/greetingModule/pages/Greeting";
import { AnotherPage } from "./presentation/anotherModule/pages/AnotherPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Greeting />} />
      <Route path="/another-page" element={<AnotherPage />} />
    </Routes>
  );
}

export default App;
