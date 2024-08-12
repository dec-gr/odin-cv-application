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

import Icon from '@mdi/react';
import { mdiMapMarker, mdiPhone, mdiEmail } from '@mdi/js';

const CVData = {
  firstName: 'Steve',
  lastName: 'Petroski',
  email: 'spetroski@gmail.com',
  phone: '0783127226561',
  address: '82 Kent Road, London',
  summary:
    'I am a professional Water Engineer, having spent many years building and maintaining water networks across the UK.',
  skill: '',
};

const initialSkills = [
  {
    id: uuidv4(),
    skill: 'Excellent Communication Skills',
  },
  { id: uuidv4(), skill: 'Problem Resolution' },
  { id: uuidv4(), skill: 'Team Work' },
];

const initialEducation = [
  {
    school: 'The University of Warwick',
    degree: 'Masters in Water Engineering',
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
    position: 'Water Systems Engineer',
    company: 'Hydrax',
    location: 'London',
    startDate: '2017-05-12',
    endDate: '2017-05-12',
    stillEmployed: true,
    description:
      'I built and maintained Hydrax water systems across North West London.',
  },
  {
    id: uuidv4(),
    position: 'Water Systems Surveyor',
    company: 'Thames Water',
    location: 'London',
    startDate: '2010-05-12',
    endDate: '2017-05-12',
    stillEmployed: false,
    description:
      'Worked for Thames Water, surveying and reporting on their network.',
  },
];

function CVAplication() {
  const [applicationData, setApplicationData] = useState(CVData);
  //const [summaryData, setSummaryData] = useState('');

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
    setApplicationData({ ...applicationData, summary: e.target.value });
    //setSummaryData(e.target.value);
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
                fieldValue={applicationData.firstName}
                onChange={handleFirstNameChange}
              />
              <Input
                label="Last Name"
                controlled={true}
                fieldValue={applicationData.lastName}
                onChange={handleLastNameChange}
              />
              <Input
                label="Email"
                type="email"
                controlled={true}
                fieldValue={applicationData.email}
                onChange={handleEmailChange}
              />
              <Input
                label="Phone Number"
                type="tel"
                controlled={true}
                fieldValue={applicationData.phone}
                onChange={handlePhoneChange}
              />
              <Input
                label="Address"
                controlled={true}
                fieldValue={applicationData.address}
                onChange={handleAddressChange}
              />
            </DataForm>
          </Card>
        </InputSection>
        <InputSection sectionHeader="Professional Summary">
          <Card>
            <InputTextBox
              label="Professional Summary"
              fieldValue={applicationData.summary}
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
          <div className="cvEntry">
            <p>{applicationData.summary}</p>
          </div>

          <h2>Work History</h2>

          {workExperience.map((workEntry) => (
            <div key={workEntry.id} className="cvEntry">
              <h3>
                {workEntry.position}
                <span className="workDates">
                  {', '}
                  {workEntry.startDate}
                  {' - '}
                  {!workEntry.stillEmployed ? workEntry.endDate : 'Present'}
                </span>
              </h3>
              <h4>
                {workEntry.company}
                {', '}
                {workEntry.location}
              </h4>
              <p>{workEntry.description}</p>

              {/* <h3>{workEntry.position}</h3>
              <h4>{workEntry.company}</h4>
              <h4>{workEntry.location}</h4>
              <h4>{workEntry.startDate}</h4>
              <h4>{workEntry.endDate}</h4>
              <h4>{workEntry.stillEmployed}</h4>
              <h4>{workEntry.description}</h4> */}
            </div>
          ))}
          <h2>Education</h2>

          {education.map((educationEntry) => (
            <div key={educationEntry.id} className="cvEntry">
              <h3>
                {educationEntry.degree}
                <span className="workDates">
                  {', '}
                  {educationEntry.startDate}
                  {' - '}
                  {!educationEntry.stillEnrolled
                    ? educationEntry.endDate
                    : 'Present'}
                </span>
              </h3>
              <h4>
                {educationEntry.school}
                {', '}
                {educationEntry.location}
              </h4>
            </div>
          ))}
          {/* <h3>Masters of Water Engineering, Sep 2015 - June 2019</h3>
          <h4>Warwick University</h4>
          <h5>Warwick, England</h5> */}
        </div>
        <div className="cvSideBar">
          <div className="infoCont">
            <div className="addressCont">
              <Icon path={mdiMapMarker} size={1} className="Icon" />

              <p>{applicationData.address}</p>
            </div>
            <div className="phoneCont">
              <Icon path={mdiPhone} size={1} className="Icon" />
              <p>{applicationData.phone}</p>
            </div>
            <div className="emailCont">
              <Icon path={mdiEmail} size={1} className="Icon" />
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
