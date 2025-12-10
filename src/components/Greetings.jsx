import steakImage from "../assets/steak.jpg";

function Greeting() {
  return (
    <div>
      <h1>&quot;Hi, I'm a steak!&quot;</h1>
      <img
        src={steakImage}
        alt="Delicious Steak"
        style={{ width: "300px", height: "auto" }}
      />
      <h1>Hi, I'm a circle!</h1>
      <svg>
        <circle cx="70" cy="70" r="40" stroke="blue" strokeWidth="4" />
      </svg>
      <form>
        <input
          type="text"
          placeholder="Enter your name"
          style={{ height: "33px", width: "200px" }}
        />
        <button type="submit" style={{ margin: "10px" }}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Greeting;
