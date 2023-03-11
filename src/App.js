import ApplicationsView from "./components/ApplicationsView";
import CommunityView from "./components/CommunityView";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
  return (
    <div className="App bg-beige">
        <Router>  
          {/* <Header/>  */}
          <Routes>
            <Route path='/' element={<ApplicationsView/>}></Route>
            {/* <Route path="/login" element={<Login/>}></Route> */}
            <Route path="/community" element={<CommunityView />}></Route>
            {/* <Route path='/settings' element={<Settings />}></Route> */}

          </Routes>
          <Navbar />
        </Router>


    </div>
  );
}

export default App;
