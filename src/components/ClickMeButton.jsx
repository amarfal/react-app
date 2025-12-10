function Button(props) {
  const buttonStyle = {
    color: props.color,
    fontSize: props.fontSize + "px",
  };

  return <button style={buttonStyle}>{props.text}</button>;
}

export default function App() {
  return (
    <div>
      <Button text="Click Me!" color="blue" fontSize={16} />
      <Button text="Don't Click Me!" color="red" fontSize={16} />
      <Button text="Click Me!" color="blue" fontSize={16} />
    </div>
  );
}
