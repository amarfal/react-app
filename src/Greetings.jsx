import steakImage from "./assets/steak.jpg";

function Greeting() {
  return (
    <div>
      <h1>&quot;The steak is ready.&quot;</h1>
      <img
        src={steakImage}
        alt="Delicious Steak"
        style={{ width: "100px", height: "auto" }}
      />
      <h1>Test title</h1>
      <svg>
        <circle cx="50" cy="50" r="40" stroke="black" strokeWidth="4" />
      </svg>
      <form>
        <input type="text" />
      </form>
    </div>
  );
}

export default Greeting;
