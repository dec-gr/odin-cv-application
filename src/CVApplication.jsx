import Input from './components/Input.jsx';
import InputTextBox from './components/InputTextBox.jsx';
import Card from './components/Card.jsx';
import DataForm from './components/DataForm.jsx';
import InputSection from './components/InputSection.jsx';
import SkillInputList from './components/SkillCard.jsx';

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
  { skill: 'cycling', id: uuidv4() },
  { skill: 'swimming', id: uuidv4() },
  { skill: 'climbing', id: uuidv4() },
];

function CVAplication() {
  const [applicationData, setApplicationData] = useState(CVData);
  const [summaryData, setSummaryData] = useState('');

  const [skills, setSkills] = useState(initialSkills);

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
            <DataForm>
              <Input label="School" />
              <Input label="Degree" />
              <Input label="Start Date" type="date" />
              <Input label="End Date" type="date" />
              <Input label="Still Enrolled" type="checkbox" />
              <Input label="Location" />
            </DataForm>
          </Card>
        </InputSection>
        <InputSection sectionHeader="Work History">
          <Card>
            <DataForm>
              <Input label="Position" />
              <Input label="Company" />
              <Input label="Location" />
              <Input label="Start Date" type="date" />
              <Input label="End Date" type="date" />
              <Input label="Still Employed" type="checkbox" />
              <Input label="Description" />
            </DataForm>
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
          <h3>Water Engineer, Nov 2019 - Present</h3>
          <h4>Hydrax</h4>
          <h5>London, England</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
          <h2>Education</h2>
          <h3>Masters of Water Engineering, Sep 2015 - June 2019</h3>
          <h4>Warwick University</h4>
          <h5>Warwick, England</h5>
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
