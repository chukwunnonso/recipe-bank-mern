import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Auth } from './pages/auth';
import { CreateRecipe } from './pages/create-recipe';
import { SavedRecipe } from './pages/saved-recipe';
import { Navbar } from "./components/navbar";

function App() {
  return ( 
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/saved-recipe" element={ <SavedRecipe />} />
          <Route path="/create-recipe" element={ <CreateRecipe />} />
          <Route path="/auth" element={ <Auth />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
