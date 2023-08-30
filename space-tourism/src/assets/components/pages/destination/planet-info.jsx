import moonWebp from "../../../img/destination/image-moon.webp";
import marsWebp from "../../../img/destination/image-mars.webp";
import titanWebp from "../../../img/destination/image-titan.webp";
import europaWebp from "../../../img/destination/image-europa.webp";

export default function Planet({ info }) {
  let imagePath;
  if (info.name === "Moon") {
    imagePath = moonWebp;
  } else if (info.name === "Mars") {
    imagePath = marsWebp;
  } else if (info.name === "Titan") {
    imagePath = titanWebp;
  } else if (info.name === "Europa") {
    imagePath = europaWebp;
  }
  return (
    <>
      <section>
        <article>
          <img src={imagePath} alt={`image of ${info.name}`} />
        </article>
        <article>
          <h3>{info.name}</h3>
          <span>{info.description}</span>
          <hr />
          <div>
            <div>
              <span> Avg. distance {info.distance}</span>
            </div>
            <div>
              <span> Est. travel time {info.travel}</span>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}
