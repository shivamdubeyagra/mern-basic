import {Routes, Route} from "react-router-dom"
import HomePage from "./pages/HomePage"
import CreatePage from "./pages/CreatePage"
import Navbar from "./components/Navbar"
function App() {
  return (
    <>
      <div style={{minHeight: "100vh"}}>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
