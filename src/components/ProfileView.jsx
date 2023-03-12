// import React from 'react'
// import "../profile.css"

// function ProfileView() {
//   return (
//     <div className="profile">
//       <h2>Select image</h2>
//       <input type="file" name='file' onChange={(e) => this.handleFile(e)} />
//       <button className="buttons" type="button" onClick={(e)=>this.handleUpload(e)}>Upload</button>
//       <h2>NAME</h2>
//       <input type="text" id="name-input" class="profile-form" placeholder="Enter your full name" disabled/>
//       <button className="buttons" type="button" id="name-edit" class="profile-button" onclick="">Edit</button>
//       <button className="buttons" type="button" id="name-save" class="profile-button" onclick="">Save</button>
  
//       <h2>EMAIL ADDRESS</h2>
//       <input type="text" id="email-input" class="profile-form" placeholder="Enter your email" disabled/>
//       <button className="buttons" type="button" id="email-edit" class="profile-button" onclick="">Edit</button>
//       <button className="buttons" type="button" id="email-save" class="profile-button" onclick="">Save</button>

//       <h2>PASSWORD</h2>
//       <input type="password" id="password-input" class="profile-form" placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;" disabled/>
//       <button className="buttons" type="button" id="password-edit" class="profile-button" onclick="">Edit</button>
//       <button className="buttons" type="button" id="password-save" class="profile-button" onclick="">Save</button>
//     </div>
            
  
//   )
// }

// export default ProfileView

import React, { useState, useEffect } from 'react';
// import firebase from 'firebase/app';
// import 'firebase/storage';
// import 'firebase/auth';
import '../profile.css';
import * as DataInterface from './DataInterface'


function ProfileView() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [communityID, setCommunityID] = useState('');
  const [photoUrl, setPhotoUrl] = useState(null);
  // const [pho

  const handleUserUpdate = (e) => {
    e.preventDefault();

    const userData = {
      email: email,
      userName: username,
      communityID: communityID,
    }

    DataInterface.updateUser(userData)
    
  };

  const getUserInfo = () => {
    const data = DataInterface.getUser()

    console.log(data)
    setUsername(data.userName)
    setEmail(data.email)
    setCommunityID(data.communityID)
    
  }
  
  useEffect(() => {
    getUserInfo()
  }, []);
  // useEffect(() => {
  //   const user = firebase.auth().currentUser;
  //   if (user) {
  //     setName(user.displayName || '');
  //     setEmail(user.email || '');
  //     setPassword('');
  //     setPhotoUrl(user.photoURL || null);
  //   }
  // }, []);

  // const handleFile = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     setPhotoFile(file);
  //     setPhotoUrl(URL.createObjectURL(file));
  //   }
  // };

  // const handleUpload = () => {
  //   if (photoFile) {
  //     const storageRef = firebase.storage().ref(`users/${firebase.auth().currentUser.uid}/profile.jpg`);
  //     storageRef.put(photoFile).then(() => {
  //       storageRef.getDownloadURL().then((url) => {
  //         setPhotoUrl(url);
  //         firebase.auth().currentUser.updateProfile({ photoURL: url });
  //       });
  //     });
  //   }
  // };

  // const handleNameEdit = () => {
  //   document.getElementById('name-input').disabled = false;
  //   document.getElementById('name-save').disabled = false;
  //   document.getElementById('name-edit').disabled = true;
  // };

  // const handleNameSave = () => {
  //   firebase.auth().currentUser.updateProfile({ displayName: name }).then(() => {
  //     document.getElementById('name-input').disabled = true;
  //     document.getElementById('name-save').disabled = true;
  //     document.getElementById('name-edit').disabled = false;
  //   });
  // };

  // const handleEmailEdit = () => {
  //   document.getElementById('email-input').disabled = false;
  //   document.getElementById('email-save').disabled = false;
  //   document.getElementById('email-edit').disabled = true;
  // };

  // const handleEmailSave = () => {
  //   firebase.auth().currentUser.updateEmail(email).then(() => {
  //     document.getElementById('email-input').disabled = true;
  //     document.getElementById('email-save').disabled = true;
  //     document.getElementById('email-edit').disabled = false;
  //   });
  // };

  // const handlePasswordEdit = () => {
  //   document.getElementById('password-input').disabled = false;
  //   document.getElementById('password-save').disabled = false;
  //   document.getElementById('password-edit').disabled = true;
  // };

  // const handlePasswordSave = () => {
  //   firebase.auth().currentUser.updatePassword(password).then(() => {
  //     document.getElementById('password-input').disabled = true;
  //     document.getElementById('password-save').disabled = true;
  //     document.getElementById('password-edit').disabled = false;
  //     setPassword('');
  //   });
  // };



  return (
    <div className="profile">
      {/* <h2>Select image</h2>
      <input type="file" name="file" onChange={(e) => set(e.target.value)} />
      {photoUrl && <img src={photoUrl} alt="Profile" /> } */}
      {/* <button className="buttons" type="button" onClick={handleUpload}>Upload</button> */}
      <h2>UserName</h2>
      <input type="text" id="name-input" className="profile-form" placeholder="Enter your full name" value={username} disabled onChange={(e) => setUsername(e.target.value)}></input>
      <h2>Email</h2>
      <input type="text" id="email-input" className="profile-form" placeholder="Enter your email" value={email} disabled onChange={(e) => setEmail(e.target.value)}></input>
      <h2>Community ID</h2>
      <input type="text" id="communityID-input" className="profile-form" placeholder="Enter your community ID" value={communityID} disabled onChange={(e) => setCommunityID(e.target.value)}></input>
     </div>
     
      )
      }

export default ProfileView
