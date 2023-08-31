import moonWebp from "../../../img/destination/image-moon.webp";
import marsWebp from "../../../img/destination/image-mars.webp";
import titanWebp from "../../../img/destination/image-titan.webp";
import europaWebp from "../../../img/destination/image-europa.webp";

export default function DestinationImg({ info }) {
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
      <img src={imagePath} alt={`image of ${info.name}`} />
    </>
  );
}
