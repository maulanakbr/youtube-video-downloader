import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results/:query" element={<SearchResults />} />
        <Route path="/request-not-found" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
