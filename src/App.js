
import './App.css';
import {useEffect, useState} from 'react'

function App() {

  const[data,setData]=useState([])

  useEffect(()=>{
    fetch("https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json")
      .then(resp=>resp.json())
      .then(result=>{setData(result.appointments)})
      .catch(err=>{console.log(err)})
      
  },[])

  console.log(data)

  return (
    <>
    <div className="App">
      <div className="heading">
        <h1>Today's Appointment List</h1>
      </div>
      <div className="tbl-div">

      <table>

    <tr> 
    <th className="first-head">
      Patients</th>
    <th>Date</th>
    <th>Time</th>
    <th>Doctor</th>
    <th>Injury</th>
    <th className="last-head">Action</th>
    </tr>
  {data.map((app)=>(
    <tr>
    <td>
      <div className="inLine">   <svg class="h-10 w-8 text-black-500 mr-4"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />  <circle cx="12" cy="7" r="4" /> </svg>
    <span>
    <div>
    {app.patient_name}
    </div>
    <div>
   {app.mobile_number}
    </div>
    </span> </div></td>
    <td>
    <div className="inLine">
    <svg class="h-6 w-6 text-gray-500 mr-4"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="4" y="5" width="16" height="16" rx="2" />  <line x1="16" y1="3" x2="16" y2="7" />  <line x1="8" y1="3" x2="8" y2="7" />  <line x1="4" y1="11" x2="20" y2="11" />  <rect x="8" y="15" width="2" height="2" /></svg>
     <span> {app.appointment_date}</span></div></td>
   
    <td>
    <div className="inLine">
    <svg class="h-6 w-6 text-gray-500 mr-4"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="12" r="9" />  <polyline points="12 7 12 12 15 15" /></svg>
    <span> {app.appointment_time}</span></div></td>
    <td>
    <div className="inLine">
    <svg class="h-6 w-6 text-green-500 mr-4"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
    <span>{app.doctor}</span></div>
    </td>
    <td>
    <button className="btn-injury" disabled>
  {app.injury}
</button>
      </td>
    <td><svg class="h-8 w-8 text-gray-500 mr-4"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="12" r="1" />  <circle cx="12" cy="19" r="1" />  <circle cx="12" cy="5" r="1" /></svg></td>
    
  </tr>
  ))}
  </table>
</div>
    </div>
    </>
  );
}

export default App;
