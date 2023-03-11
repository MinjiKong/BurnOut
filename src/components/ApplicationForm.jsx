import React from 'react'
import * as DataInterface from './DataInterface'
import {useState, useEffect} from 'react';
import { JobPositions } from './DataInterface';


function ApplicationForm() {

  const [day, setDay] = useState(new Date().getDate());
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [year, setYear] = useState(new Date().getFullYear());

  const [companyName, setCompanyName] = useState("");
  const [position, setPosition] = useState("");
  const [dateApplied, setDateApplied] = useState("");
  const [applicationStatus, setApplicationStatus] = useState("");
  const [comments, setComments] = useState("");

  const jobPosition = JobPositions;

  const days = [];
  for (let i = 1; i <= 31; i++) {
    days.push(<option key={i} value={i}>{i}</option>);
  }

  const months = [
    <option key="01" value="01">January</option>,
    <option key="02" value="02">February</option>,
    <option key="03" value="03">March</option>,
    <option key="04" value="04">April</option>,
    <option key="05" value="05">May</option>,
    <option key="06" value="06">June</option>,
    <option key="07" value="07">July</option>,
    <option key="08" value="08">August</option>,
    <option key="09" value="09">September</option>,
    <option key="10" value="10">October</option>,
    <option key="11" value="11">November</option>,
    <option key="12" value="12">December</option>
  ];

  const years = [];
  for (let i = 1900; i <= new Date().getFullYear(); i++) {
    years.push(<option key={i} value={i}>{i}</option>);
  }

  const statusOptions = [
    { value: 'applied', label: 'Applied' },
    { value: 'interview-invitation', label: 'Interview Invitation' },
    { value: 'interviewed', label: 'Interviewed' },
    { value: 'offered', label: 'Offered' },
    { value: 'accepted', label: 'Accepted' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    const date = new Date(`${year}-${month}-${day}`);
    const formattedDate = date.toISOString().substring(0,10);

    setDateApplied(formattedDate);
    const randomNumber = Math.round(Math.random() * 100);

    const applicationData = {
      companyName: {companyName},
      dateApplied: {dateApplied},
      applicationStatus: {applicationStatus},
      jobPosition: {position},
      comments: {comments},
      communityID: randomNumber
    }
    
    DataInterface.createApplication(applicationData);

    // useEffect(() => {
    //   DataInterface.createApplication(applicationData);
    // }, [])

    console.log(`Submitted: ${companyName} ${position} ${dateApplied} ${applicationStatus} ${comments} ${day} ${month} ${year}`)
    
  }

  return (
    
    <form onSubmit={handleSubmit} className="form-container" style={{ width: "500px", margin: "20vh auto", height: "100vh" }}>
      <div className="form-row">
        <label htmlFor="companyName" className="visually-hidden"></label>
          <input type="text" id="companyName" placeholder="Company Name" value={companyName} onChange={(e) => setCompanyName(e.target.value)}  style={{height: "50px", backgroundColor: "#C1A1D3"}} />
      </div>

      <div className="form-row">
        <label htmlFor="position" className="visually-hidden"></label>
        <select id="position" value={position} onChange={(e) => setPosition(e.target.value)} style={{height: "50px", backgroundColor: "#C1A1D3"}}>
          <option value="" >Select Position:</option>
          {Object.values(jobPosition).map((option) =>(
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>

      <div className="date-row">
        <label htmlFor="date">Date Applied:</label>
        <div>
          <select id="day" value={day} onChange={(e) => setDay(e.target.value)} style={{backgroundColor: "#C1A1D3", marginRight: "5px"}}>
            {days}
          </select>
          <select id="month" value={month < 10 ? "0" + month : month} onChange={(e) => setMonth(e.target.value)} style={{backgroundColor: "#C1A1D3", marginRight: "5px"}}>
            {months}
          </select>
          <select id="year" value={year} onChange={(e) => setYear(e.target.value)} style={{backgroundColor: "#C1A1D3", marginRight: "5px"}}>
            {years}
          </select>
        </div>
      </div>


      <div className="form-row">
        <select id="applicationStatus" value={position} onChange={(e) => setPosition(e.target.value)} style={{height: "50px", backgroundColor: "#C1A1D3"}}>
          <option value="">Choose Application Status</option>
          {statusOptions.map((option) =>(
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
      </div>


      <div className="form-row">
        <label htmlFor="comments" className="visually-hidden"></label>
          <input type="text" id="comments" placeholder="Comments" value={comments} onChange={(e) => setComments(e.target.value)} style={{height: "200px", backgroundColor: "#C1A1D3"}} />
      </div>


      <div className="button-row">
        <button type="button">Cancel</button>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
  
}

export default ApplicationForm