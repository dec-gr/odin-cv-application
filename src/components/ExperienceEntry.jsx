export default function ExperienceEntry(props) {
  return (
    <>
      {props.array.map((arrayEntry) => (
        <div key={arrayEntry.id} className="cvEntry">
          <h3>
            {arrayEntry[props.entryTitle]}
            <span className="workDates">
              {', '}
              {arrayEntry.startDate}
              {' - '}
              {!arrayEntry[props.stillThere] ? arrayEntry.endDate : 'Present'}
            </span>
          </h3>
          <h4>
            {arrayEntry[props.org]}
            {', '}
            {arrayEntry.location}
          </h4>
          <p>{arrayEntry.description}</p>
        </div>
      ))}
    </>
  );
}
