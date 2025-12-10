function List(props) {
  return (
    <ul>
      {props.animals.map((animal) => {
        return animal.startsWith("L") && <li key={animal}>{animal}</li>;
      })}
    </ul>
  );
}

function AnimalsList() {
  const animals = [
    "Dog",
    "Cat",
    "Bird",
    "Fish",
    "Snake",
    "Lizard",
    "Turtle",
    "Insect",
  ];

  return (
    <div>
      <h1>Animals: </h1>
      <List animals={animals} />
    </div>
  );
}

function App() {
  const animals = [
    "Dog",
    "Cat",
    "Bird",
    "Fish",
    "Snake",
    "Lizard",
    "Turtle",
    "Insect",
  ];

  return (
    <div>
      <h1>Animals: </h1>
      <List animals={animals} />
    </div>
  );
}

export default App;
