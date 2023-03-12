import React, { useEffect, useState } from "react";
import ApplicationsView from "./components/ApplicationsView";
import CommunityView from "./components/CommunityView";
import LoginView from "./components/LoginView";
import SignUpView from "./components/SignUpView";
import ApplicationForm from './components/ApplicationForm';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { useLocation } from "react-router-dom";
import Header from "./components/Header";
import LeaderboardView from "./components/LeaderboardView";
import * as DataInterface from './components/DataInterface'
import ProfileView from "./components/ProfileView";

function App() {
  const location = useLocation();
  const [isLogin, setIsLogin] = useState(false);
  const handleLogin = () => {
    setIsLogin(true);
  }

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

  const RequireAuth = ({ children }) => {
    const userIsLogged = DataInterface.isLoggedIn();//useLoginStatus(); // Your hook to get login status

    if (!userIsLogged) {
       return <LoginView />;
    }
    return children;
 };
  return (
    <div className="App bg-beige">

          <Header text={text}/>
          <Routes>
            {/* <Route path='/' element={<LoginView/>}></Route> */}
            {/* <Route path='/' element={<ApplicationsView/>}></Route> */}
            {/* <Route path="/login" element={<Login/>}></Route> */}
            {/* <Route path='/settings' element={<Settings />}></Route> */}
            {/* <Route path="/community" element={<CommunityView />}></Route> */}
            {/* <Route path='/leaderboard' element={<LeaderboardView />}></Route> */}
            <Route
              path="/"
              element={
                  <RequireAuth>
                    <ApplicationsView />
                  </RequireAuth>
              }
            />
            <Route
              path="/community"
              element={
                  <RequireAuth>
                    <CommunityView />
                  </RequireAuth>
              }
            />
            <Route
              path="/leaderboard"
              element={
                  <RequireAuth>
                    <LeaderboardView />
                  </RequireAuth>
              }
            />
            <Route
              path="/profile"
              element={
                  <RequireAuth>
                    <ProfileView />
                  </RequireAuth>
              }
            />
            <Route
              path="/applicationform"
              element={
                  <RequireAuth>
                    <ApplicationForm />
                  </RequireAuth>
              }
            />

          </Routes>
          <Navbar />

      </div>
  )
}

export default App
