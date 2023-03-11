import React, { useState } from "react";
import ApplicationsView from "./components/ApplicationsView";
import CommunityView from "./components/CommunityView";
import LoginView from "./components/LoginView";
import SignUpView from "./components/SignUpView";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from "./components/Header";
import LeaderboardView from "./components/LeaderboardView";
import { useLocation } from "react-router-dom";
// import './App.css'

function App() {
  const location = useLocation();
  const [headerText, setHeader] = useState("Burn Out");
  console.log(location.pathname)

  var text = "Burn Out"
  switch (location.pathname) {
    case '/':
      text = "My Applications"
      break;
    case '/community':
      text = "Community"
      break;
    case '/leaderboard':
      text = "Leaderboard"
      break;
    default:
      text = "Burn Out"
      break;
  }

  
  return (
    <div className="App bg-beige">
        {/* <Router>   */}
          <Header text={text}/>
          <Routes>
            <Route path='/' element={<ApplicationsView/>}></Route>
            {/* <Route path="/login" element={<Login/>}></Route> */}
            <Route path="/community" element={<CommunityView />}></Route>
            {/* <Route path='/settings' element={<Settings />}></Route> */}
            <Route path='/leaderboard' element={<LeaderboardView />}></Route>
          </Routes>
          <Navbar />
        {/* </Router> */}
      </div>
  )
}

export default App
