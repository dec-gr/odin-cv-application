import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../styles/SkillCard.css';

function SkillInput({ skill, onChangeHandler, removeSkillHander }) {
  return (
    <label className="skillInput">
      <input
        type="text"
        value={skill.skill}
        onChange={(e) => onChangeHandler(skill.id, e)}
      ></input>
      <button onClick={() => removeSkillHander(skill.id)}>X</button>
    </label>
  );
}

export default function SkillInputList({ skills, setSkills }) {
  function handleSkillChange(id, e) {
    setSkills(
      skills.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            skill: e.target.value,
          };
        } else {
          return item;
        }
      })
    );
  }

  function addSkillHandler() {
    setSkills([...skills, { skill: '', id: uuidv4() }]);
  }

  function removeSkillHander(id) {
    setSkills(skills.filter((item) => item.id !== id));
  }

  return (
    <div className="div">
      <ul className="skillList">
        {skills.map((skill) => (
          <li key={skill.id}>
            <SkillInput
              skill={skill}
              onChangeHandler={handleSkillChange}
              removeSkillHander={removeSkillHander}
            />
          </li>
        ))}
      </ul>
      <button onClick={addSkillHandler} className="addSkill">
        Add Skill
      </button>
    </div>
  );
}
