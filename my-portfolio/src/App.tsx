import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AINotebookProject from "./Pages/AINotebookProject";
import HarmonyVaulters from "./Pages/HarmonyVaulters";
import ChatBot from "./Pages/ChatBot";
import DailyDoseOfPotions from "./Pages/DailyDoseOfPotions";
import PLCHell from "./Pages/PLCHell";
import CollabMultiUser from "./Pages/CollabMultiUser";
import OffTheScreen from "./Pages/OffTheScreen";
import CaffeineRequired from "./Pages/CaffeineRequired"

//TODO: Implement Skeleton Page
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/projects/ai-notebook"
          element={<AINotebookProject />}
        />
        <Route
          path="/projects/harmonyvaulters"
          element={<HarmonyVaulters />}
        />
          <Route
          path="/projects/ChatBot"
          element={<ChatBot />}
        />        
        <Route
          path="/projects/DailyDoseOfPotions"
          element={<DailyDoseOfPotions />}
        />
        <Route
          path="/projects/plc-hell"
          element={<PLCHell />}
        />
          <Route
          path="/projects/collab-multi-user"
          element={<CollabMultiUser />}
        />          
        <Route
          path="/projects/OffTheScreen"
          element={<OffTheScreen />}
        />
        <Route
          path="/projects/CaffeineRequired"
          element={<CaffeineRequired />}
        />        
      </Routes>
    </BrowserRouter>
  );
}

export default App;