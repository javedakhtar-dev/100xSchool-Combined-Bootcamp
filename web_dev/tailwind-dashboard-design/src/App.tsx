import { useState } from "react";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";
import "./index.css";

export function App() {
  const [showSidebar, setShowSidebar] = useState(false)
  return (
    <div className="flex">
      <div className="w-0 h-screen md:w-80 transition-all duration-1000">
        <Sidebar />
      </div>
      <div className="w-full">
        <MainContent />
      </div>
    </div>
  );
}

export default App;
