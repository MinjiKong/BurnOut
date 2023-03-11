import React, { useState } from "react";
import ApplicationsView from "./components/ApplicationsView";
import CommunityView from "./components/CommunityView";
import LoginView from "./components/LoginView";
import SignUpView from "./components/SignUpView";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css'

function App() {
  const [currentForm, setCurrentForm] = useState('login');
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
    {
      currentForm === "login" ? <LoginView onFormSwitch={toggleForm} /> : <SignUpView onFormSwitch={toggleForm}/>
    }
    </div>
    
    // <div className="App bg-beige">
    //     <Router>  
    //       {/* <Header/>  */}
    //       <Routes>
    //         <Route path='/' element={<ApplicationsView/>}></Route>
    //         {/* <Route path="/login" element={<Login/>}></Route> */}
    //         <Route path="/community" element={<CommunityView />}></Route>
    //         {/* <Route path='/settings' element={<Settings />}></Route> */}

    //       </Routes>
    //       <Navbar />
    //     </Router>

    // </div>
  );

}

export default App;
