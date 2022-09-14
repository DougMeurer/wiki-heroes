import { Routes, Route } from "react-router-dom";
import "./App.css";
import CollectionDetail from "./components/CollectionDetail";
import CollectionsPage from "./pages/CollectionsPage";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Collections/:heroId" element={<CollectionDetail />} />
        <Route path="/Collections" element={<CollectionsPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
