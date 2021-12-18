import "./App.scss";
import SideNav from "./components/SideNav/SideNav";
import { Routes, Route } from "react-router-dom";
import Upload from "./components/Upload/Upload";

function App() {

  return (
    <div className="App">
      <SideNav />
      <Routes>
        <Route path="/:upload" element={<Upload />} />
      </Routes>
    </div>
  );
}

export default App;
