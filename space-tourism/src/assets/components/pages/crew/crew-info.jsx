export default function CrewInfo({ crewInfo }) {
  return (
    <article className="container__crew__info__member">
      <div className="container__crew__info__member__role">{crewInfo.role}</div>
      <h3>{crewInfo.name}</h3>
      <div className="container__crew__info__member__bio">{crewInfo.bio}</div>
    </article>
  );
}
