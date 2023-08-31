export default function Planet({ info }) {
  return (
    <>
      <section className="container__info__planet">
        <h3>{info.name}</h3>
        <div className="container__info__planet__description">
          {info.description}
        </div>
        <hr />
        <div className="container__info__planet__stat">
          <div className="container__info__planet__stat__box">
            <div className="container__info__planet__stat__box__title">
              Avg. distance
            </div>
            <div className="container__info__planet__stat__box__km">{info.distance}</div>
          </div>
          <div>
            <div className="container__info__planet__stat__box__title">
              Est. travel time
            </div>
            <div className="container__info__planet__stat__box__day">{info.travel}</div>
          </div>
        </div>
      </section>
    </>
  );
}
