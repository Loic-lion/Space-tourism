export default function TechnologyInfo({ technology }) {
  return (
    <>
      <article className="container__technology__info__navigation__data">
        <div className="container__technology__info__navigation__data__subtitle">The terminology...</div>
        <h3>{technology.name}</h3>
        <div className="container__technology__info__navigation__data__description">{technology.description}</div>
      </article>
    </>
  );
}
