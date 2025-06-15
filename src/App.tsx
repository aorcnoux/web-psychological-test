import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TestProvider } from "./contexts/TestContext";
import Landing from "./pages/Landing";
import Question from "./pages/Question";
import Results from "./pages/Results";

const App = () => (
  <TestProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/question/:id" element={<Question />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </BrowserRouter>
  </TestProvider>
);

export default App;
