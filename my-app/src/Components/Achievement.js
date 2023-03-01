
import './App.css';

function App() {
  return (
  <>
  <header>
    <h1>Resume</h1>
  </header>
  <section>
  <div className="head">
        <h1>Mamoona Ijaz </h1>
        <span>Street Address</span>
        <span>Zipe Code</span>
        <span>Phone Number</span>
        <span>Email</span>
      </div>

      <div className="work">
        <h4>Work Experience</h4>
        <h5>Company Name,Dates of Employement</h5>
        <ul>
          <li>Job Title</li>
        </ul>
        <h5>Company Name,Dates of Employement</h5>
        <ul>
          <li>Job Title</li>
        </ul>
        <h5>Company Name,Dates of Employement</h5>
        <ul>
          <li>Job Title</li>
        </ul>

      </div>

    <div className="education">
      <h4>Education</h4>
      <ul>
        <li>School Name</li>
        <li>Date of Attendance</li>
      </ul>
    </div>

    <div className="achivements">
      <h4>Achivements/Awards</h4>
      <li>Lorem ipsum dolor sit amet.</li>
      <li>Lorem ipsum dolor sit amet.</li>
      <li>Lorem ipsum dolor sit amet.</li>
    </div>

    <div className="skills">
      <h4>Skills</h4>
      <ul>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
      </ul>
    </div>    
  </section>
  </>
  )
}

export default App;
