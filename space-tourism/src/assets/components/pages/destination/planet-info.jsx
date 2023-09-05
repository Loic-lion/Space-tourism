export default function Planet({ info }) {
  return (
    <>
      <section className="cont__info__planet">
        <h3>{info.name}</h3>
        <div className="cont__info__planet__description">
          {info.description}
        </div>
        <hr />
        <div className="cont__info__planet__stat">
          <div className="cont__info__planet__stat__box">
            <div className="cont__info__planet__stat__box__title">
              Avg. distance
            </div>
            <div className="cont__info__planet__stat__box__km">{info.distance}</div>
          </div>
          <div>
            <div className="cont__info__planet__stat__box__title">
              Est. travel time
            </div>
            <div className="cont__info__planet__stat__box__day">{info.travel}</div>
          </div>
        </div>
      </section>
    </>
  );
}
