import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import CharactersPage from "./pages/CharactersPage/CharactersPage";
import CharactersPageDetail from "./pages/CharactersPageDetail/CharactersPageDetail";
import Header from "./components/Header/Header";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

function App() {

  return (
    <Router>

      <Header></Header>

      <Routes>
        <Route path="/" element={<HomePage></HomePage>} />
        <Route path="/characters" element={<CharactersPage></CharactersPage>}/>
        <Route path="/characters/:id" element={<CharactersPageDetail></CharactersPageDetail>}/>
      </Routes>

    </Router>
  );
}

export default App;