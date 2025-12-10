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
      <h1>Circle</h1>
      <svg>
        <circle cx="70" cy="70" r="40" stroke="green" strokeWidth="4" />
      </svg>
      <form>
        <input type="text" />
      </form>
    </div>
  );
}

export default Greeting;
