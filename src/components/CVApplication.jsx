import Input from './Input.jsx';
import InputTextBox from './InputTextBox.jsx';
import Card from './Card.jsx';
import DataForm from './DataForm.jsx';
import InputSection from './InputSection.jsx';
import SkillInputList from './SkillCard.jsx';
import EducationList from './EducationCard.jsx';
import WorkExperienceList from './WorkExperienceCard.jsx';

import CVHeader from './CVHeader.jsx';
import CVSectionDisplay from './CVSectionDisplay.jsx';
import SkillList from './SkillList.jsx';
import PersonalInfoContainer from './PersonalnfoContainer.jsx';
import ExperienceEntry from './ExperienceEntry.jsx';

import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

//This is quite global css. This could be improved
import '../styles/CVApplication.css';

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
    description:
      'Modules included: A History of Roman Aqueducts and an intro to the Victorian Sewer system',
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
        <div className="inputCont">
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
              <SkillInputList skills={skills} setSkills={setSkills} />
            </Card>
          </InputSection>
          <InputSection sectionHeader="Education">
            <Card>
              <EducationList
                education={education}
                setEducation={setEducation}
              />
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
        </div>
      </Card>
      <div className="cvDisplay">
        <div className="cvBody">
          <CVHeader
            firstName={applicationData.firstName}
            lastName={applicationData.lastName}
          ></CVHeader>
          <CVSectionDisplay header="Professional Summary">
            <div className="cvEntry">
              <p>{applicationData.summary}</p>
            </div>
          </CVSectionDisplay>

          <CVSectionDisplay header="Work History">
            <ExperienceEntry
              array={workExperience}
              stillThere={'stillEmployed'}
              entryTitle={'position'}
              org={'company'}
            ></ExperienceEntry>
          </CVSectionDisplay>
          <CVSectionDisplay header="Education">
            <ExperienceEntry
              array={education}
              stillThere={'stillEnrolled'}
              entryTitle={'degree'}
              org={'school'}
            />
          </CVSectionDisplay>
        </div>
        <div className="cvSideBar">
          <PersonalInfoContainer
            address={applicationData.address}
            phone={applicationData.phone}
            email={applicationData.email}
          />
          <SkillList skills={skills} />
        </div>
      </div>
    </div>
  );
}

export default CVAplication;
