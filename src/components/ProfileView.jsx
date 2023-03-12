import React from 'react'
import "../profile.css"

function ProfileView() {
  return (
    <div className="profile">
      <h2>Select image</h2>
      <input type="file" name='file' onChange={(e) => this.handleFile(e)} />
      <button className="buttons" type="button" onClick={(e)=>this.handleUpload(e)}>Upload</button>
      <h2>NAME</h2>
      <input type="text" id="name-input" class="profile-form" placeholder="Enter your full name" disabled/>
      <button className="buttons" type="button" id="name-edit" class="profile-button" onclick="">Edit</button>
      <button className="buttons" type="button" id="name-save" class="profile-button" onclick="">Save</button>
  
      <h2>EMAIL ADDRESS</h2>
      <input type="text" id="email-input" class="profile-form" placeholder="Enter your email" disabled/>
      <button className="buttons" type="button" id="email-edit" class="profile-button" onclick="">Edit</button>
      <button className="buttons" type="button" id="email-save" class="profile-button" onclick="">Save</button>

      <h2>PASSWORD</h2>
      <input type="password" id="password-input" class="profile-form" placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;" disabled/>
      <button className="buttons" type="button" id="password-edit" class="profile-button" onclick="">Edit</button>
      <button className="buttons" type="button" id="password-save" class="profile-button" onclick="">Save</button>
    </div>
            
  
  )
}

export default ProfileView