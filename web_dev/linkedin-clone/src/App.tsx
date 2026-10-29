import { APITester } from "./APITester";
import MainSection from "./components/mainSection";
import Topbar from "./components/Topbar";
import "./index.css";

export function App() {
  return (
    <div>
      <Topbar />
      <MainSection />
    </div>
  );
}

export default App;
