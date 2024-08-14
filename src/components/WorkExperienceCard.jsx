import DataForm from './DataForm';
import Input from './Input';
import InputTextBox from './InputTextBox.jsx';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { updateValueInObjectArray } from './utils.js';

function WorkExperienceCard({
  workEntry,
  handlePositionChange,
  handleCompanyChange,
  handleLocationChange,
  handleStartDateChange,
  handleEndDateChange,
  handleStillEmployedChange,
  handleDescriptionChange,
  removeWorkExperienceHandler,
}) {
  return (
    <>
      <button
        onClick={() => removeWorkExperienceHandler(workEntry.id)}
        className="removeInputListItemBtn"
      >
        X
      </button>
      <DataForm>
        <Input
          label="Position"
          fieldValue={workEntry.position}
          controlled={true}
          onChange={(e) => handlePositionChange(workEntry.id, e)}
        />
        <Input
          label="Company"
          fieldValue={workEntry.company}
          controlled={true}
          onChange={(e) => handleCompanyChange(workEntry.id, e)}
        />
        <Input
          label="Location"
          fieldValue={workEntry.location}
          controlled={true}
          onChange={(e) => handleLocationChange(workEntry.id, e)}
        />
        <Input
          label="Start Date"
          fieldValue={workEntry.startDate}
          type="date"
          controlled={true}
          onChange={(e) => handleStartDateChange(workEntry.id, e)}
        />
        <label className="Input">
          Still Employed
          <input
            type="checkBox"
            onClick={(e) => handleStillEmployedChange(workEntry.id, e)}
            checked={workEntry.stillEmployed}
            onChange={() => {}}
          ></input>
        </label>

        <Input
          label="End Date"
          fieldValue={workEntry.endDate}
          type="date"
          controlled={true}
          onChange={(e) => handleEndDateChange(workEntry.id, e)}
          disabled={workEntry.stillEmployed}
        />

        <InputTextBox
          label="Description"
          fieldValue={workEntry.description}
          onChange={(e) => handleDescriptionChange(workEntry.id, e)}
        />
      </DataForm>
    </>
  );
}

export default function WorkExperienceList({
  workExperience,
  setWorkExperience,
}) {
  // handlePositionChange,
  // handleCompanyChange,
  // handleLocationChange,
  // handleStartDateChange,
  // handleEndDateChange,
  // handleStillEmployedChange,
  // handleDescriptionChange,

  function handlePositionChange(id, e) {
    setWorkExperience(
      updateValueInObjectArray(workExperience, id, 'position', e.target.value)
    );
  }

  function handleCompanyChange(id, e) {
    setWorkExperience(
      updateValueInObjectArray(workExperience, id, 'company', e.target.value)
    );
  }

  function handleLocationChange(id, e) {
    setWorkExperience(
      updateValueInObjectArray(workExperience, id, 'location', e.target.value)
    );
  }

  function handleStartDateChange(id, e) {
    setWorkExperience(
      updateValueInObjectArray(workExperience, id, 'startDate', e.target.value)
    );
  }

  function handleEndDateChange(id, e) {
    setWorkExperience(
      updateValueInObjectArray(workExperience, id, 'endDate', e.target.value)
    );
  }

  function handleStillEmployedChange(id, e) {
    setWorkExperience(
      updateValueInObjectArray(
        workExperience,
        id,
        'stillEmployed',
        e.target.checked
      )
    );
  }

  function handleDescriptionChange(id, e) {
    setWorkExperience(
      updateValueInObjectArray(
        workExperience,
        id,
        'description',
        e.target.value
      )
    );
  }

  function addWorkExperience() {
    setWorkExperience([...workExperience, { id: uuidv4() }]);
  }

  function removeWorkExperienceHandler(id) {
    setWorkExperience(workExperience.filter((item) => item.id !== id));
  }

  return (
    <>
      {workExperience.map((workEntry) => (
        <li key={workEntry.id} className="cvInputListItem">
          <WorkExperienceCard
            workEntry={workEntry}
            handlePositionChange={handlePositionChange}
            handleCompanyChange={handleCompanyChange}
            handleLocationChange={handleLocationChange}
            handleStartDateChange={handleStartDateChange}
            handleEndDateChange={handleEndDateChange}
            handleStillEmployedChange={handleStillEmployedChange}
            handleDescriptionChange={handleDescriptionChange}
            removeWorkExperienceHandler={removeWorkExperienceHandler}
          />
        </li>
      ))}
      <button onClick={addWorkExperience} className="addToListBtn">
        Add Work Entry
      </button>
    </>
  );
}
