import React, { useState } from "react";


function ApplicationsView() {


  const personPost = [
    {
      id: 1,
      name: 'Micky Mouse',
      pic: '../images/mickyMouse.png',
      comment: '50th application anniversary! yaayy... end me.',
      applications: '50',
      rejections: '4',
      datetime: '2 hours ago',
    },
  ];

  const [response, setResponse] = useState("");
  const [responses, setResponses] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setResponses([...responses, response]);
    setResponse("");
  };

  const handleChange = (e) => {
    setResponse(e.target.value);
  };

  return (
    <div className="post-container" >
      <div className="post-header">
        <img
          src={personPost[0].pic}
          alt="Profile"
          className="profile-img"
        />
        <div className="header-info">
          <h3>{personPost[0].name}</h3>
          <p className="username">Applications: {personPost[0].applications}</p>
          <p className="username">Rejections: {personPost[0].rejections}</p>
        </div>
      </div>
      <div className="post-content">
        <p>
          {personPost[0].comment}
        </p>
      </div>



      <div className="post-responses">
        {responses.map((r, index) => (
          <div key={index} className="post-response">
            <img
              src={personPost[0].pic}
              alt="Profile"
              className="profile-img"
            />
            <div className="response-info">
              <h3>John Doe</h3>
              <p className="username">@johndoe</p>
              <p className="response-text">{r}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="post-response-form">
        <form onSubmit={handleSubmit}>
          <textarea
            placeholder="Post your reply"
            value={response}
            onChange={handleChange}
            className="response-input"
          ></textarea>
          <button type="submit" className="post-btn">
            POST
          </button>
        </form>
      </div>
    </div>
  );
}

export default ApplicationsView;