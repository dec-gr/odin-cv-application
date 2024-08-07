import DataForm from './DataForm';
import Input from './Input';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const initialEducation = [
  {
    id: uuidv4(),
    school: 'Warwick',
    degree: 'Engineering',
    startDate: '1998-12-05',
  },
];

//TODO - Education functionality of adding additional cards needs to be replicated for Work History.
//That should probably be it's own react function (operating on child inputs) to keep it DRY

function EducationCard({
  educationEntry,
  handleSchoolChange,
  handleDegreeChange,
  handleStartDateChange,
  removeEducationHandler,
}) {
  return (
    <DataForm>
      <Input
        label="School"
        value={educationEntry.school}
        controlled={true}
        onChange={(e) => handleSchoolChange(educationEntry.id, e)}
      />
      <Input
        label="Degree"
        controlled={true}
        value={educationEntry.degree}
        onChange={(e) => handleDegreeChange(educationEntry.id, e)}
      />
      <Input
        label="Start Date"
        type="date"
        controlled={true}
        value={educationEntry.startDate}
        onChange={(e) => handleStartDateChange(educationEntry.id, e)}
      />
      <button onClick={() => removeEducationHandler(educationEntry.id)}>
        X
      </button>
    </DataForm>
  );
}

export default function EducationList({ education, setEducation }) {
  function handleSchoolChange(id, e) {
    setEducation(
      education.map((entry) => {
        if (entry.id === id) {
          return {
            ...entry,
            school: e.target.value,
          };
        } else {
          return entry;
        }
      })
    );
  }

  //TODO - Handle change functions have a lot of repeated code, could probably be a function on it's own
  //parameters (education, id, field, new value)
  function handleDegreeChange(id, e) {
    setEducation(
      education.map((entry) => {
        if (entry.id === id) {
          return {
            ...entry,
            degree: e.target.value,
          };
        } else {
          return entry;
        }
      })
    );
  }

  function handleStartDateChange(id, e) {
    setEducation(
      education.map((entry) => {
        if (entry.id === id) {
          return {
            ...entry,
            startDate: e.target.value,
          };
        } else {
          return entry;
        }
      })
    );
  }

  function addEducationEntry() {
    setEducation([...education, { id: uuidv4() }]);
  }

  function removeEducationHandler(id) {
    setEducation(education.filter((item) => item.id !== id));
  }

  return (
    <>
      {education.map((educationEntry) => (
        <li key={educationEntry.id}>
          <EducationCard
            educationEntry={educationEntry}
            handleSchoolChange={handleSchoolChange}
            handleDegreeChange={handleDegreeChange}
            handleStartDateChange={handleStartDateChange}
            removeEducationHandler={removeEducationHandler}
          />
        </li>
      ))}
      <button onClick={addEducationEntry}>Add Education Entry</button>
    </>
  );
}

// <Input label="End Date" type="date" />
//       <Input label="Still Enrolled" type="checkbox" />
//       <Input label="Location" />
