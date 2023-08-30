import douglas from "../../../img/crew/image-douglas-hurley.webp";
import mark from "../../../img/crew/image-mark-shuttleworth.webp";
import victor from "../../../img/crew/image-victor-glover.webp";
import anousheh from "../../../img/crew/image-anousheh-ansari.webp";

export default function CrewImg({ crewimage }) {
  let imagePath;
  if (crewimage.name === "Douglas Hurley") {
    imagePath = douglas;
  } else if (crewimage.name === "Mark Shuttleworth") {
    imagePath = mark;
  } else if (crewimage.name === "Victor Glover") {
    imagePath = victor;
  } else if (crewimage.name === "Anousheh Ansari") {
    imagePath = anousheh;
  }
  return (
    <>
      <img src={imagePath} alt={`image of ${crewimage.name}`} />
    </>
  );
}
