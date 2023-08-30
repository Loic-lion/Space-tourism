export default function CrewInfo({ crewInfo }) {
  return (
    <article>
      <span>{crewInfo.role}</span>
      <h3>{crewInfo.name}</h3>
      <span>{crewInfo.bio}</span>
    </article>
  );
}
