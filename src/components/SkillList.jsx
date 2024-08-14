function SkillEntry(props) {
  return (
    <ul>
      {props.skills.map((skill) => (
        <li key={skill.id}>{skill.skill}</li>
      ))}
    </ul>
  );
}

export default function SkillList(props) {
  return (
    <div className="skillsCont">
      <h3>Skills</h3>
      <SkillEntry {...props} />
    </div>
  );
}
