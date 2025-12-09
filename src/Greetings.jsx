import steakImage from "./assets/steak.jpg";

function Greeting() {
  return (
    <div>
      <h1>&quot;The steak is ready.&quot;</h1>
      <img
        src={steakImage}
        alt="Delicious Steak"
        style={{ width: "1000px", height: "auto" }}
      />
    </div>
  );
}

export default Greeting;
