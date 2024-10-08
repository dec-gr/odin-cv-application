import DataForm from './DataForm';
import Input from './Input';
import { useState } from 'react';
import { updateValueInObjectArray } from './utils.js';
import { v4 as uuidv4 } from 'uuid';
import InputTextBox from './InputTextBox.jsx';

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
  handleEndDateChange,
  handleIsStillEnrolledChange,
  handleLocationChange,
  handleDescriptionChange,
  removeEducationHandler,
}) {
  return (
    <>
      <button
        onClick={() => removeEducationHandler(educationEntry.id)}
        className="removeInputListItemBtn"
      >
        X
      </button>
      <DataForm>
        <Input
          label="School"
          fieldValue={educationEntry.school}
          controlled={true}
          onChange={(e) => handleSchoolChange(educationEntry.id, e)}
        />
        <Input
          label="Degree"
          controlled={true}
          fieldValue={educationEntry.degree}
          onChange={(e) => handleDegreeChange(educationEntry.id, e)}
        />
        <Input
          label="Location"
          controlled={true}
          fieldValue={educationEntry.location}
          onChange={(e) => handleLocationChange(educationEntry.id, e)}
        />

        <Input
          label="Start Date"
          type="date"
          controlled={true}
          fieldValue={educationEntry.startDate}
          onChange={(e) => handleStartDateChange(educationEntry.id, e)}
        />
        <label className="Input">
          Still Enrolled
          <input
            type="checkBox"
            onClick={(e) => handleIsStillEnrolledChange(educationEntry.id, e)}
            checked={educationEntry.stillEnrolled}
            onChange={() => {}}
          ></input>
        </label>

        <Input
          label="End Date"
          type="date"
          controlled={true}
          fieldValue={educationEntry.endDate}
          onChange={(e) => handleEndDateChange(educationEntry.id, e)}
          disabled={educationEntry.stillEnrolled}
        />
        <InputTextBox
          label="Description"
          fieldValue={educationEntry.description}
          onChange={(e) => handleDescriptionChange(educationEntry.id, e)}
        />
      </DataForm>
    </>
  );
}

export default function EducationList({ education, setEducation }) {
  function handleSchoolChange(id, e) {
    setEducation(
      updateValueInObjectArray(education, id, 'school', e.target.value)
    );
  }

  function handleDegreeChange(id, e) {
    setEducation(
      updateValueInObjectArray(education, id, 'degree', e.target.value)
    );
  }

  function handleStartDateChange(id, e) {
    setEducation(
      updateValueInObjectArray(education, id, 'startDate', e.target.value)
    );
  }

  function handleEndDateChange(id, e) {
    setEducation(
      updateValueInObjectArray(education, id, 'endDate', e.target.value)
    );
  }

  function handleIsStillEnrolledChange(id, e) {
    setEducation(
      updateValueInObjectArray(education, id, 'stillEnrolled', e.target.checked)
    );
  }

  function handleLocationChange(id, e) {
    setEducation(
      updateValueInObjectArray(education, id, 'location', e.target.value)
    );
  }

  function handleDescriptionChange(id, e) {
    setEducation(
      updateValueInObjectArray(education, id, 'description', e.target.value)
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
        <li key={educationEntry.id} className="cvInputListItem">
          <EducationCard
            educationEntry={educationEntry}
            handleSchoolChange={handleSchoolChange}
            handleDegreeChange={handleDegreeChange}
            handleStartDateChange={handleStartDateChange}
            handleEndDateChange={handleEndDateChange}
            handleIsStillEnrolledChange={handleIsStillEnrolledChange}
            handleLocationChange={handleLocationChange}
            handleDescriptionChange={handleDescriptionChange}
            removeEducationHandler={removeEducationHandler}
          />
        </li>
      ))}
      <button onClick={addEducationEntry} className="addToListBtn">
        Add Education Entry
      </button>
    </>
  );
}

// <Input label="End Date" type="date" />
//       <Input label="Still Enrolled" type="checkbox" />
//       <Input label="Location" />
