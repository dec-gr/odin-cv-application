export default function CVSectionDisplay(props) {
  return (
    <>
      <h2>{props.header}</h2>
      {props.children}
    </>
  );
}
