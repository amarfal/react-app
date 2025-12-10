import AnimalsList from "./components/AnimalsList.jsx";
import Greeting from "./components/Greetings.jsx";
import TodoList from "./components/TodoList.jsx";
import ClickMeButton from "./components/ClickMeButton.jsx";

function App() {
  return (
    <div>
      <Greeting />
      <AnimalsList />
      <TodoList />
      <ClickMeButton />
    </div>
  );
}

export default App;
