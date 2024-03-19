import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './component/Navbar/Navbar';
import Rockets from './component/Rocket/Rockets';
import Missions from './component/Mission/Missions';
import Dragons from './component/Dragon/Dragons';
import Profile from './component/Profile/Profile';

function App() {
  return (
    <Router>
    <nav>
     </nav>
     <main>
        <Routes>  
          <Route index element={<Rockets />} />
          <Route path="/mission" element={<Missions />} />
          <Route path="/dragon" element={<Dragons />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
   </Router>
  );
}

export default App;
