export default function TechnologyInfo({ technology }) {
  return (
    <>
      <article>
        <span>The terminology...</span>
        <h3>{technology.name}</h3>
        <span>{technology.description}</span>
      </article>
    </>
  );
}
