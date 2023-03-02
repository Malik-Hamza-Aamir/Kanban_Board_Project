import { Route, Routes } from "react-router-dom";
import Boards from "./Components/Boards/Boards";
import Navbar from "./Components/Navbar/Navbar";
import ProjectSettings from "./Components/Project_Settings/ProjectSettings";
import Sidebar from "./Components/Sidebar/Sidebar";

const App = () => {
  return (
    <>
      <Navbar />
      <Sidebar>
        <Routes>
          <Route path="/" element={<Boards />} />
          <Route path="/board" element={<Boards />} />
          <Route path="/projectsettings" element={<ProjectSettings />} />
        </Routes>
      </Sidebar>
    </>
  );
};

export default App;
