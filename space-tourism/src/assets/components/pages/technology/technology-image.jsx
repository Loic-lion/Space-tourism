import launch from "../../../img/technology/image-launch-vehicle-landscape.jpg";
import spacesport from "../../../img/technology/image-spaceport-landscape.jpg";
import capsule from "../../../img/technology/image-space-capsule-landscape.jpg";
import launchDesktop from "../../../img/technology/image-launch-vehicle-portrait.jpg";
import spacesportDesktop from "../../../img/technology/image-spaceport-portrait.jpg";
import capsuleDesktop from "../../../img/technology/image-space-capsule-portrait.jpg";
export default function TechnologyImg({ techImage }) {
  let imagePath;
  let imagePathDesktop;
  if (techImage.name === "Launch vehicle") {
    imagePath = launch;
    imagePathDesktop = launchDesktop;
  } else if (techImage.name === "Spaceport") {
    imagePath = spacesport;
    imagePathDesktop = spacesportDesktop;
  } else if (techImage.name === "Space capsule") {
    imagePath = capsule;
    imagePathDesktop = capsuleDesktop;
  }
  return (
    <>
      <img src={imagePath} alt={`image of ${techImage.name}`} />
      <img src={imagePathDesktop} alt={`image of ${techImage.name}`} />
    </>
  );
}
