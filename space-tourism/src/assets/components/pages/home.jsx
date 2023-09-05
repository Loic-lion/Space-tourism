import "../../css/home.css";

export default function Home() {
  function addBodyClass() {
    document.body.classList.add("home");
    document.body.classList.remove("technology");
    document.body.classList.remove("crew");
    document.body.classList.remove("destination");
  }
  addBodyClass();
  return (
    <>
      <section className="container">
        <section className="container__home">
          <h5>SO, YOU WANT TO TRAVEL TO</h5>
          <h1>SPACE</h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </section>
        <section className="container__explore">
          <div className="container__explore__circle">
            EXPLORE
            <div className="container__explore__circle__button"></div>
          </div>
        </section>
      </section>
    </>
  );
}
