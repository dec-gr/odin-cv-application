import Input from './components/Input.jsx';
import InputTextBox from './components/InputTextBox.jsx';
import Card from './components/Card.jsx';
import DataForm from './components/DataForm.jsx';
import InputSection from './components/InputSection.jsx';
import SkillInputList from './components/SkillCard.jsx';
import EducationList from './components/EducationCard.jsx';
import WorkExperienceList from './components/WorkExperienceCard.jsx';

import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const CVData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  address: '',
  summary: '',
  skill: '',
};

const initialSkills = [
  { id: uuidv4(), skill: 'cycling' },
  { id: uuidv4(), skill: 'swimming' },
  { id: uuidv4(), skill: 'climbing' },
];

const initialEducation = [
  {
    school: 'Warwick',
    degree: 'Engineering',
    startDate: '1998-05-12',
    endDate: '1998-05-12',
    stillEnrolled: true,
    location: 'Warwick, England',
    id: uuidv4(),
  },
];

const initialWorkExperience = [
  {
    id: uuidv4(),
    position: 'water engineer',
    company: 'hydrax',
    location: 'London',
    startDate: '1998-05-12',
    endDate: '1998-05-12',
    stillEmployed: false,
    description: '',
  },
];

function CVAplication() {
  const [applicationData, setApplicationData] = useState(CVData);
  const [summaryData, setSummaryData] = useState('');

  const [skills, setSkills] = useState(initialSkills);
  const [education, setEducation] = useState(initialEducation);
  const [workExperience, setWorkExperience] = useState(initialWorkExperience);

  function handleFirstNameChange(e) {
    setApplicationData({ ...applicationData, firstName: e.target.value });
  }

  function handleLastNameChange(e) {
    setApplicationData({ ...applicationData, lastName: e.target.value });
  }

  function handleEmailChange(e) {
    setApplicationData({ ...applicationData, email: e.target.value });
  }

  function handlePhoneChange(e) {
    setApplicationData({ ...applicationData, phone: e.target.value });
  }

  function handleAddressChange(e) {
    setApplicationData({ ...applicationData, address: e.target.value });
  }

  function handleSummaryChange(e) {
    // setApplicationData({ ...applicationData, summary: e.target.value });
    setSummaryData(e.target.value);
  }

  return (
    <div className="appContainer">
      <Card>
        <InputSection sectionHeader="Personal Details">
          <Card>
            <DataForm>
              <Input
                label="First Name"
                controlled={true}
                value={applicationData.firstName}
                onChange={handleFirstNameChange}
              />
              <Input
                label="Last Name"
                controlled={true}
                value={applicationData.lastName}
                onChange={handleLastNameChange}
              />
              <Input
                label="Email"
                type="email"
                controlled={true}
                value={applicationData.email}
                onChange={handleEmailChange}
              />
              <Input
                label="Phone Number"
                type="tel"
                controlled={true}
                value={applicationData.phone}
                onChange={handlePhoneChange}
              />
              <Input
                label="Address"
                controlled={true}
                value={applicationData.address}
                onChange={handleAddressChange}
              />
            </DataForm>
          </Card>
        </InputSection>
        <InputSection sectionHeader="Professional Summary">
          <Card>
            <InputTextBox
              label="Professional Summary"
              value={summaryData}
              onChange={handleSummaryChange}
            />
          </Card>
        </InputSection>
        <InputSection sectionHeader="Skills">
          <Card>
            <DataForm>
              <SkillInputList skills={skills} setSkills={setSkills} />
            </DataForm>
          </Card>
        </InputSection>
        <InputSection sectionHeader="Education">
          <Card>
            <EducationList education={education} setEducation={setEducation} />
          </Card>
        </InputSection>
        <InputSection sectionHeader="Work History">
          <Card>
            <WorkExperienceList
              workExperience={workExperience}
              setWorkExperience={setWorkExperience}
            />
          </Card>
        </InputSection>
      </Card>
      <div className="cvDisplay">
        <div className="cvBody">
          <h1>
            {applicationData.firstName} {applicationData.lastName}
          </h1>
          <h2>Professional Summary</h2>
          <p>{summaryData}</p>
          <h2>Work History</h2>
          {workExperience.map((workEntry) => (
            <div key={workEntry.id}>
              <h3>{workEntry.position}</h3>
              <h4>{workEntry.company}</h4>
              <h4>{workEntry.startDate}</h4>
            </div>
          ))}
          <h2>Education</h2>

          {education.map((educationEntry) => (
            <div key={educationEntry.id}>
              <h3>{educationEntry.degree}</h3>
              <h4>{educationEntry.school}</h4>
              <h4>{educationEntry.startDate}</h4>
            </div>
          ))}

          {/* <h3>Masters of Water Engineering, Sep 2015 - June 2019</h3>
          <h4>Warwick University</h4>
          <h5>Warwick, England</h5> */}
        </div>
        <div className="cvSideBar">
          <div className="infoCont">
            <div className="addressCont">
              <p>{applicationData.address}</p>
            </div>
            <div className="phoneCont">
              <p>{applicationData.phone}</p>
            </div>
            <div className="emailCont">
              <p>{applicationData.email}</p>
            </div>
          </div>
          <div className="skillsCont">
            <h3>Skills</h3>
            <ul>
              {skills.map((skill) => (
                <li key={skill.id}>{skill.skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CVAplication;
